import { Ionicons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

export default function DetalleScreen() {
  const params = useLocalSearchParams<{
    id?: string;
    nombre?: string;
    marca?: string;
    talla?: string;
    precio?: string;
    stock?: string;
    imagen_url?: string;
    tipo_pago?: string;
  }>();

  return (
    <ScrollView style={styles.container}>
      {/* Botón de Volver */}
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color="#ffffff" />
        <Text style={styles.backText}>Volver al Catálogo</Text>
      </TouchableOpacity>

      <View style={styles.card}>
        {/* Imagen del producto */}
        {params.imagen_url && params.imagen_url !== '' && params.imagen_url !== 'null' ? (
          <Image
            source={{ uri: params.imagen_url }}
            style={styles.imagen}
            resizeMode="cover"
          />
        ) : (
          <View style={styles.noImagenContainer}>
            <Ionicons name="image-outline" size={60} color="#ff3333" />
            <Text style={styles.noImagenText}>Sin imagen disponible</Text>
          </View>
        )}

        {/* Encabezado */}
        <View style={styles.headerRow}>
          <Text style={styles.nombre}>{params.nombre || 'Producto'}</Text>
          <Text style={styles.marcaBadge}>{params.marca || 'N/A'}</Text>
        </View>

        <View style={styles.divider} />

        {/* Detalles */}
        <View style={styles.detailRow}>
          <Text style={styles.label}>ID del Registro:</Text>
          <Text style={styles.value}>#{params.id || 'N/A'}</Text>
        </View>

        <View style={styles.detailRow}>
          <Text style={styles.label}>Talla:</Text>
          <Text style={styles.value}>{params.talla || 'N/A'}</Text>
        </View>

        <View style={styles.detailRow}>
          <Text style={styles.label}>Precio:</Text>
          <Text style={styles.precioValue}>
            ${params.precio ? Number(params.precio).toLocaleString() : '0'}
          </Text>
        </View>

        <View style={styles.detailRow}>
          <Text style={styles.label}>Stock Disponible:</Text>
          <Text style={styles.value}>{params.stock || '0'} unidades</Text>
        </View>

        <View style={styles.detailRow}>
          <Text style={styles.label}>Tipo de Pago:</Text>
          <Text style={styles.pagoValue}>{params.tipo_pago || 'No especificado'}</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    padding: 16,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 12,
  },
  backText: {
    fontSize: 16,
    marginLeft: 8,
    color: '#ffffff',
    fontWeight: '600',
  },
  card: {
    backgroundColor: '#1a1a1a',
    borderRadius: 12,
    padding: 20,
    borderWidth: 1,
    borderColor: '#ff3333',
    marginBottom: 30,
  },
  imagen: {
    width: '100%',
    height: 220,
    borderRadius: 8,
    marginBottom: 16,
  },
  noImagenContainer: {
    width: '100%',
    height: 180,
    borderRadius: 8,
    backgroundColor: '#111111',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#333333',
  },
  noImagenText: {
    marginTop: 8,
    color: '#aaaaaa',
    fontSize: 14,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  nombre: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ffffff',
    flex: 1,
  },
  marcaBadge: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#ffffff',
    backgroundColor: '#ff3333',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
    overflow: 'hidden',
  },
  divider: {
    height: 1,
    backgroundColor: '#333333',
    marginVertical: 12,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  label: {
    fontSize: 15,
    color: '#aaaaaa',
    fontWeight: '500',
  },
  value: {
    fontSize: 15,
    color: '#ffffff',
    fontWeight: '600',
  },
  precioValue: {
    fontSize: 18,
    color: '#ff3333',
    fontWeight: 'bold',
  },
  pagoValue: {
    fontSize: 15,
    color: '#ffffff',
    fontWeight: '600',
  },
});