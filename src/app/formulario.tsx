import { router } from 'expo-router';
import { useState } from 'react';
import {
    Alert,
    ImageBackground,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';

export default function FormularioScreen() {
  const [nombre, setNombre] = useState('');
  const [calzado, setCalzado] = useState('');
  const [cantidad, setCantidad] = useState('');

  const handleRealizarPedido = () => {
    if (!nombre || !calzado || !cantidad) {
      Alert.alert('Error', 'Por favor completa todos los campos del pedido.');
      return;
    }

    Alert.alert(
      '¡Pedido Registrado!',
      `Nombre: ${nombre}\nCalzado: ${calzado}\nCantidad: ${cantidad}`
    );
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
          <Text style={styles.subPedido}>Completa la información</Text>

          <Text style={styles.labelInput}>Nombre</Text>
          <TextInput
            style={styles.input}
            placeholder="Escribe tu nombre"
            placeholderTextColor="#666666"
            value={nombre}
            onChangeText={setNombre}
          />

          <Text style={styles.labelInput}>Calzado</Text>
          <TextInput
            style={styles.input}
            placeholder="Ejemplo: Zapatillas Urbanas"
            placeholderTextColor="#666666"
            value={calzado}
            onChangeText={setCalzado}
          />

          <Text style={styles.labelInput}>Cantidad</Text>
          <TextInput
            style={styles.input}
            placeholder="Ejemplo: 1, 2, 3 etc...."
            placeholderTextColor="#666666"
            keyboardType="numeric"
            value={cantidad}
            onChangeText={setCantidad}
          />

          <Pressable style={styles.botonEnviarPedido} onPress={handleRealizarPedido}>
            <Text style={styles.textoBotonEnviar}>Confirmar Pedido</Text>
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