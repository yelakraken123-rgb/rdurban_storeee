import { router } from 'expo-router';
import { useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { supabase } from '../../lib/supabase';

export default function FormularioScreen() {
  const [nombre, setNombre] = useState('');
  const [calzadoSeleccionado, setCalzadoSeleccionado] = useState('');
  const [talla, setTalla] = useState('');
  const [cantidad, setCantidad] = useState('');
  const [tipoPago, setTipoPago] = useState('');
  const [guardando, setGuardando] = useState(false);

  // Catálogo fijo basado en tus productos reales con sus precios correspondientes
  const productosCatalogo = [
    { nombre: 'Zapatillas Urbanas', precio: 120000 },
    { nombre: 'Guayos-Mercurial', precio: 180000 },
    { nombre: 'JORDAN', precio: 350000 },
  ];

  // Validaciones
  const handleNombreChange = (text: string) => {
    const soloLetras = text.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, '');
    setNombre(soloLetras);
  };

  const handleTallaChange = (text: string) => {
    const soloNumeros = text.replace(/[^0-9]/g, '');
    setTalla(soloNumeros);
  };

  const handleCantidadChange = (text: string) => {
    const soloNumeros = text.replace(/[^0-9]/g, '');
    setCantidad(soloNumeros);
  };

  const handleRealizarPedido = async () => {
    if (!nombre || !calzadoSeleccionado || !talla || !cantidad || !tipoPago) {
      Alert.alert('Error', 'Por favor completa todos los campos del pedido.');
      return;
    }

    // Buscar el producto seleccionado para obtener su precio automático
    const productoEncontrado = productosCatalogo.find(p => p.nombre === calzadoSeleccionado);
    const precioAutomatico = productoEncontrado ? productoEncontrado.precio : 0;

    try {
      setGuardando(true);

      const { data, error } = await supabase
        .from('zapatos')
        .insert([
          {
            nombre: nombre,
            marca: calzadoSeleccionado,
            talla: parseFloat(talla),
            precio: precioAutomatico, // ¡Precio asignado automáticamente según el catálogo!
            stock: parseInt(cantidad, 10),
            tipo_pago: tipoPago,
          },
        ])
        .select();

      if (error) {
        console.log('Error Supabase:', error);
        Alert.alert('Error', error.message);
        return;
      }

      const registro = data?.[0];

      router.push({
        pathname: '/resultado',
        params: {
          id: String(registro.id),
          nombre: registro.nombre,
          calzado: registro.marca,
          talla: String(registro.talla),
          precio: String(registro.precio),
          cantidad: String(registro.stock),
          tipoPago: registro.tipo_pago,
        },
      });

    } catch (error) {
      console.log(error);
      Alert.alert('Error', 'No fue posible guardar la información en Supabase');
    } finally {
      setGuardando(false);
    }
  };

  return (
    <ImageBackground
      source={{ uri: 'https://i.pinimg.com/1200x/c8/b3/b1/c8b3b1d085cda402517078e60bb51a34.jpg' }}
      style={styles.background}
      imageStyle={{ opacity: 0.25 }}
    >
      <ScrollView
        style={styles.containerTransparent}
        contentContainerStyle={styles.contenido}
        showsVerticalScrollIndicator={false}
      >
        <Pressable style={styles.botonVolver} onPress={() => router.back()}>
          <Text style={styles.textoBotonVolver}>← Volver al inicio</Text>
        </Pressable>

        <View style={styles.tarjetaPedido}>
          <Text style={styles.tituloPedido}>Realiza tu pedido</Text>
          <Text style={styles.subPedido}>Selecciona tu calzado del catálogo</Text>

          <Text style={styles.labelInput}>Nombre (Solo letras)</Text>
          <TextInput
            style={styles.input}
            placeholder="Escribe tu nombre"
            placeholderTextColor="#666666"
            value={nombre}
            onChangeText={handleNombreChange}
          />

          <Text style={styles.labelInput}>Selecciona el Calzado</Text>
          <View style={styles.contenedorBotonesCatalogo}>
            {productosCatalogo.map((prod) => (
              <Pressable
                key={prod.nombre}
                style={[
                  styles.botonOpcion,
                  calzadoSeleccionado === prod.nombre && styles.botonOpcionSeleccionado,
                ]}
                onPress={() => setCalzadoSeleccionado(prod.nombre)}
              >
                <Text style={styles.textoOpcion}>{prod.nombre} (${prod.precio.toLocaleString()})</Text>
              </Pressable>
            ))}
          </View>

          <Text style={styles.labelInput}>Talla (Solo números)</Text>
          <TextInput
            style={styles.input}
            placeholder="Ejemplo: 38, 40, 42..."
            placeholderTextColor="#666666"
            keyboardType="numeric"
            value={talla}
            onChangeText={handleTallaChange}
          />

          <Text style={styles.labelInput}>Cantidad (Solo números)</Text>
          <TextInput
            style={styles.input}
            placeholder="Ejemplo: 1, 2, 3..."
            placeholderTextColor="#666666"
            keyboardType="numeric"
            value={cantidad}
            onChangeText={handleCantidadChange}
          />

          <Text style={styles.labelInput}>Tipo de Pago</Text>
          <TextInput
            style={styles.input}
            placeholder="Ejemplo: Efectivo, Tarjeta, Transferencia"
            placeholderTextColor="#666666"
            value={tipoPago}
            onChangeText={setTipoPago}
          />

          <Pressable 
            style={styles.botonEnviarPedido} 
            onPress={handleRealizarPedido}
            disabled={guardando}
          >
            {guardando ? (
              <ActivityIndicator color="#FFFFFF" />
            ) : (
              <Text style={styles.textoBotonEnviar}>Guardar en Supabase</Text>
            )}
          </Pressable>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  containerTransparent: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.65)',
  },
  contenido: {
    padding: 22,
    paddingTop: 30,
    paddingBottom: 50,
  },
  botonVolver: {
    marginBottom: 20,
  },
  textoBotonVolver: {
    fontFamily: 'System',
    color: '#FF1744',
    fontSize: 16,
    fontWeight: 'bold',
  },
  tarjetaPedido: {
    backgroundColor: 'rgba(20, 20, 20, 0.95)',
    padding: 20,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: '#333333',
  },
  tituloPedido: {
    fontFamily: 'System',
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  subPedido: {
    fontFamily: 'System',
    fontSize: 13,
    color: '#AAAAAA',
    marginTop: 2,
    marginBottom: 15,
    fontWeight: 'bold',
  },
  labelInput: {
    fontFamily: 'System',
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FF1744',
    marginBottom: 6,
    marginTop: 10,
  },
  input: {
    fontFamily: 'System',
    backgroundColor: 'rgba(10, 10, 10, 0.8)',
    borderWidth: 1,
    borderColor: '#333333',
    borderRadius: 12,
    padding: 12,
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 'bold',
  },
  contenedorBotonesCatalogo: {
    marginBottom: 10,
  },
  botonOpcion: {
    backgroundColor: 'rgba(30, 30, 30, 0.9)',
    borderWidth: 1,
    borderColor: '#444',
    padding: 10,
    borderRadius: 10,
    marginBottom: 6,
  },
  botonOpcionSeleccionado: {
    borderColor: '#FF1744',
    backgroundColor: 'rgba(255, 23, 68, 0.2)',
  },
  textoOpcion: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  botonEnviarPedido: {
    backgroundColor: '#FF1744',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 20,
  },
  textoBotonEnviar: {
    fontFamily: 'System',
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 15,
  },
});