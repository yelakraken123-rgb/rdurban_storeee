import { router, useLocalSearchParams } from 'expo-router';

import { Pressable, StyleSheet, Text, View } from 'react-native';



export default function ResultadoScreen() {

  const params = useLocalSearchParams();



  // Función para formatear el precio de manera bonita (ej: 120000 -> $120.000)

  const formatearPrecio = (precioStr: any) => {

    const numero = Number(precioStr);

    if (isNaN(numero)) return '$0';

    return `$${numero.toLocaleString('es-CO')}`;

  };



  return (

    <View style={styles.container}>

      <Text style={styles.titulo}>¡Pedido Guardado con Éxito!</Text>

      <Text style={styles.texto}><Text style={styles.negrita}>ID:</Text> {params.id}</Text>

      <Text style={styles.texto}><Text style={styles.negrita}>Nombre:</Text> {params.nombre}</Text>

      <Text style={styles.texto}><Text style={styles.negrita}>Calzado:</Text> {params.calzado}</Text>

      <Text style={styles.texto}><Text style={styles.negrita}>Talla:</Text> {params.talla}</Text>

      <Text style={styles.texto}><Text style={styles.negrita}>Precio:</Text> {formatearPrecio(params.precio)}</Text>

      <Text style={styles.texto}><Text style={styles.negrita}>Cantidad:</Text> {params.cantidad}</Text>

      <Text style={styles.texto}><Text style={styles.negrita}>Tipo de Pago:</Text> {params.tipoPago}</Text>



      {/* Botón para ir a ver todos los registros guardados */}

      <Pressable style={styles.botonRegistros} onPress={() => router.push('/registros')}>

        <Text style={styles.textoBoton}>Ver Pedidos Guardados</Text>

      </Pressable>



      {/* Botón para volver al formulario */}

      <Pressable style={styles.boton} onPress={() => router.back()}>

        <Text style={styles.textoBoton}>Volver al formulario</Text>

      </Pressable>

    </View>

  );

}



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#111',

    justifyContent: 'center',

    alignItems: 'center',

    padding: 20

  },

  titulo: {

    fontSize: 22,

    fontWeight: 'bold',

    color: '#4CAF50',

    marginBottom: 20,

    textAlign: 'center'

  },

  texto: {

    fontSize: 16,

    color: '#FFF',

    marginBottom: 10

  },

  negrita: {

    fontWeight: 'bold',

    color: '#FF1744'

  },

  boton: {

    backgroundColor: '#FF1744',

    padding: 12,

    borderRadius: 10,

    marginTop: 15,

    width: '80%',

    alignItems: 'center'

  },

  botonRegistros: {

    backgroundColor: '#2196F3',

    padding: 12,

    borderRadius: 10,

    marginTop: 20,

    width: '80%',

    alignItems: 'center'

  },

  textoBoton: {

    color: '#FFF',

    fontWeight: 'bold'

  }

});