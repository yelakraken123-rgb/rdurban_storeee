import { router } from 'expo-router';
import {
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function MenuScreen() {
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
        {/* Encabezado de la pantalla con título y subtítulo del catálogo */}
        <View style={styles.header}>
          <Text style={styles.titulo}>Catálogo de Zapatos</Text>
          <Text style={styles.subtitulo}>
            Selecciona el calzado que deseas ver a detalle.
          </Text>
        </View>

        {/* Tarjeta 1: Producto Zapatillas Urbanas */}
        <View style={styles.tarjeta}>
          <View style={styles.infoProducto}>
            <Text style={styles.nombreProducto}>👽🔥 Zapatillas Urbanas 🔥👽</Text>
            <Text style={styles.descripcion}>Comodidad y diseño moderno</Text>
            <Text style={styles.precio}>$120.000</Text>
          </View>
          <Pressable
            style={styles.botonVer}
            onPress={() => router.push('/producto/1')}
          >
            <Text style={styles.botonVerTexto}>Ver</Text>
          </Pressable>
        </View>

        {/* Tarjeta 2: Producto Guayos-Mercurial */}
        <View style={styles.tarjeta}>
          <View style={styles.infoProducto}>
            <Text style={styles.nombreProducto}>👻🔥 Guayos-Mercurial 🔥👻</Text>
            <Text style={styles.descripcion}>Máximo agarre y amortiguación</Text>
            <Text style={styles.precio}>$180.000</Text>
          </View>
          <Pressable
            style={styles.botonVer}
            onPress={() => router.push('/producto/2')}
          >
            <Text style={styles.botonVerTexto}>Ver</Text>
          </Pressable>
        </View>

        {/* Tarjeta 3: Producto Jordan */}
        <View style={styles.tarjeta}>
          <View style={styles.infoProducto}>
            <Text style={styles.nombreProducto}>⚡🥷 JORDAN 🥷⚡</Text>
            <Text style={styles.descripcion}>Elegancia y formalidad</Text>
            <Text style={styles.precio}>$150.000</Text>
          </View>
          <Pressable
            style={styles.botonVer}
            onPress={() => router.push('/producto/3')}
          >
            <Text style={styles.botonVerTexto}>Ver</Text>
          </Pressable>
        </View>

        {/* Botón para regresar a la pantalla anterior */}
        <Pressable
          style={styles.botonRegresar}
          onPress={() => router.back()}
        >
          <Text style={styles.botonRegresarTexto}>Regresar al inicio</Text>
        </Pressable>
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
    paddingTop: 50,
    paddingBottom: 50,
  },
  header: {
    marginBottom: 20,
  },
  titulo: {
    fontFamily: 'System',
    fontSize: 30, 
    fontWeight: 'bold',
    color: '#FFFFFF',
    letterSpacing: -0.4,
  },
  subtitulo: {
    fontFamily: 'System',
    fontSize: 15, 
    lineHeight: 22,
    color: '#FF5252',
    marginTop: 6,
    fontWeight: 'bold',
  },
  tarjeta: {
    backgroundColor: 'rgba(20, 20, 20, 0.92)',
    padding: 18,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#333333',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
    shadowColor: '#FF1744',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  infoProducto: {
    flex: 1,
    paddingRight: 10,
  },
  nombreProducto: {
    fontFamily: 'System',
    fontSize: 17, 
    fontWeight: 'bold',
    color: '#FFFFFF',
    letterSpacing: -0.2,
  },
  descripcion: {
    fontFamily: 'System',
    fontSize: 13, 
    lineHeight: 18,
    color: '#CCCCCC',
    marginTop: 4,
    fontWeight: 'bold',
  },
  precio: {
    fontFamily: 'System',
    fontSize: 17, 
    fontWeight: 'bold',
    color: '#FF1744',
    marginTop: 8,
    letterSpacing: -0.2,
  },
  botonVer: {
    backgroundColor: '#FF1744',
    paddingVertical: 12,
    paddingHorizontal: 22,
    borderRadius: 14,
  },
  botonVerTexto: {
    fontFamily: 'System',
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 15,
  },
  botonRegresar: {
    marginTop: 25,
    backgroundColor: '#FF1744', 
    paddingVertical: 15,
    borderRadius: 16,
    alignItems: 'center',
    shadowColor: '#FF1744',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  botonRegresarTexto: {
    fontFamily: 'System',
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});