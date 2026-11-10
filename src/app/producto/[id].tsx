import { router, useLocalSearchParams } from 'expo-router';
import {
    Image,
    ImageBackground,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';

export default function DetalleProductoScreen() {
  const { id } = useLocalSearchParams();

  const productosData: Record<string, { nombre: string; precio: string; desc: string; imagen: string }> = {
    '1': {
      nombre: '👽🔥 Zapatillas Urbanas 🔥👽',
      precio: '$150.000',
      desc: 'Comodidad y diseño moderno ideal para el uso diario urbano.',
      imagen: 'https://i.pinimg.com/736x/a1/2a/ec/a12aec1b862cef4c453f716f8519e4d9.jpg',
    },
    '2': {
      nombre: '👻🔥 Guayos-Mercurial 🔥👻',
      precio: '$180.000',
      desc: 'Máximo agarre, tecnología de amortiguación avanzada para alto rendimiento.',
      imagen: 'https://i.pinimg.com/736x/c1/28/ac/c128ac875ea28cbce6fe117062cb3d04.jpg',
    },
    '3': {
      nombre: '⚡🥷 JORDAN 🥷⚡',
      precio: '$250.000',
      desc: 'Elegancia, formalidad y materiales de alta calidad en cuero genuino.',
      imagen: 'https://i.pinimg.com/736x/e7/f1/ab/e7f1ab9e81b857262736175f4e254ae6.jpg',
    },
  };

  const producto = productosData[Array.isArray(id) ? id[0] : (id || '1')] || {
    nombre: 'Calzado Exclusivo',
    precio: '$140.000',
    desc: 'Diseño exclusivo de edición limitada para coleccionistas.',
    imagen: 'https://i.pinimg.com/736x/a1/2a/ec/a12aec1b862cef4c453f716f8519e4d9.jpg',
  };

  return (
    <ImageBackground
      source={{ uri: 'https://i.pinimg.com/1200x/c8/b3/b1/c8b3b1d085cda402517078e60bb51a34.jpg' }}
      style={styles.background}
      imageStyle={{ opacity: 0.25 }}
    >
      <ScrollView contentContainerStyle={styles.containerTransparent}>
        <View style={styles.header}>
          <Text style={styles.titulo}>Detalle del Calzado</Text>
          <Text style={styles.subtitulo}>ID de referencia: #{id}</Text>
        </View>

        <View style={styles.tarjeta}>
          <Image source={{ uri: producto.imagen }} style={styles.imagenProducto} />
          <View style={styles.infoContainer}>
            <Text style={styles.nombreProducto}>{producto.nombre}</Text>
            <Text style={styles.descripcion}>{producto.desc}</Text>
            <Text style={styles.precio}>{producto.precio}</Text>
          </View>
        </View>

        <Pressable
          style={styles.boton}
          onPress={() => router.back()}
        >
          <Text style={styles.botonTexto}>Regresar al catálogo</Text>
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
    flexGrow: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: 20,
    justifyContent: 'center',
  },
  header: {
    marginBottom: 15,
    paddingHorizontal: 5,
  },
  titulo: {
    fontSize: 26,
    fontWeight: '800',
    color: '#FFFFFF',
    letterSpacing: -0.5,
  },
  subtitulo: {
    fontSize: 14,
    color: '#FF1744',
    marginTop: 4,
    fontWeight: '600',
  },
  tarjeta: {
    width: '100%', 
    backgroundColor: 'rgba(20, 20, 20, 0.95)',
    borderRadius: 22,
    borderWidth: 1,
    borderColor: '#333333',
    overflow: 'hidden', 
    shadowColor: '#FF1744',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 5,
    marginBottom: 20,
  },
  imagenProducto: {
    width: '100%',
    height: 280, // 
    resizeMode: 'cover', 
  },
  infoContainer: {
    padding: 20,
  },
  nombreProducto: {
    fontSize: 18,
    fontWeight: '800',
    color: '#FFFFFF',
    marginBottom: 6,
    textAlign: 'center',
  },
  descripcion: {
    fontSize: 13,
    color: '#AAAAAA',
    lineHeight: 18,
    marginBottom: 12,
    textAlign: 'center',
  },
  precio: {
    fontSize: 20,
    fontWeight: '800',
    color: '#FF1744',
    textAlign: 'center',
  },
  boton: {
    width: '100%',
    backgroundColor: '#FF1744',
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: 'center',
    shadowColor: '#FF1744',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 4,
  },
  botonTexto: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 16,
  },
});