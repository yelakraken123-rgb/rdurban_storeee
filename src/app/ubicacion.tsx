import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import {
    Pressable,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View
} from 'react-native';

export default function UbicacionScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.contenido} showsVerticalScrollIndicator={false}>
        
        {/* Barra superior */}
        <View style={styles.headerTop}>
          <Pressable onPress={() => router.back()} style={styles.backButton}>
            <Ionicons name="arrow-back" size={20} color="#FF2D55" />
            <Text style={styles.headerInicio}>Volver al inicio</Text>
          </Pressable>
        </View>

        <View style={styles.tituloContainer}>
          <Text style={styles.mainTitle}>RDURBAN-STORE</Text>
          <Text style={styles.subTitle}>Nuestra Ubicación</Text>
        </View>

        {/* Tarjeta de Información de Ubicación */}
        <View style={styles.card}>
          <View style={styles.infoRow}>
            <Ionicons name="location-outline" size={24} color="#FF2D55" style={styles.iconStyle} />
            <View>
              <Text style={styles.label}>CIUDAD / SEDE</Text>
              <Text style={styles.value}>Pasto - Nariño</Text>
            </View>
          </View>

          <View style={styles.divider} />

          <View style={styles.infoRow}>
            <Ionicons name="map-outline" size={24} color="#FF2D55" style={styles.iconStyle} />
            <View>
              <Text style={styles.label}>DIRECCIÓN</Text>
              <Text style={styles.value}>Centro Comercial Local 123</Text>
            </View>
          </View>

          <View style={styles.divider} />

          <View style={styles.infoRow}>
            <Ionicons name="time-outline" size={24} color="#FF2D55" style={styles.iconStyle} />
            <View>
              <Text style={styles.label}>HORARIO DE ATENCIÓN</Text>
              <Text style={styles.value}>Lunes a Sábado (9:00 a.m. - 7:00 p.m.)</Text>
            </View>
          </View>
        </View>

        {/* Botón Regresar */}
        <Pressable style={styles.botonRegresar} onPress={() => router.push('/')}>
          <Text style={styles.textoBoton}>Regresar al Inicio</Text>
        </Pressable>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0A0A',
  },
  contenido: {
    padding: 20,
    paddingBottom: 40,
  },
  headerTop: {
    marginBottom: 20,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerInicio: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FF2D55',
    marginLeft: 6,
  },
  tituloContainer: {
    marginBottom: 20,
  },
  mainTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  subTitle: {
    fontSize: 16,
    color: '#FF2D55',
    fontWeight: '600',
  },
  card: {
    backgroundColor: '#1A1A1A',
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: '#333333',
    marginBottom: 24,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  iconStyle: {
    marginRight: 16,
  },
  label: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#888888',
    letterSpacing: 1,
  },
  value: {
    fontSize: 14,
    color: '#FFFFFF',
    marginTop: 2,
    fontWeight: '500',
  },
  divider: {
    height: 1,
    backgroundColor: '#333333',
    marginVertical: 12,
  },
  botonRegresar: {
    backgroundColor: '#FF2D55',
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: 'center',
    shadowColor: '#FF2D55',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 4,
  },
  textoBoton: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});