import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import {
  ImageBackground,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.contenido} showsVerticalScrollIndicator={false}>
        
        {/* 1. Barra superior */}
        <View style={styles.headerTop}>
          <Text style={styles.headerInicio}>Inicio</Text>
        </View>

        {/* 2. Tarjeta Banner Principal */}
        <ImageBackground
          source={{ uri: 'https://i.pinimg.com/1200x/c8/b3/b1/c8b3b1d085cda402517078e60bb51a34.jpg' }}
          style={styles.bannerContainer}
          imageStyle={{ opacity: 0.3 }}
        >
          <View style={styles.bannerOverlay}>
            <Text style={styles.bannerSubTag}>😎👽RDURBAN APP😎👽</Text>
            <Text style={styles.bannerTitle}>😎👽RDURBAN-STORE😎👽</Text>
            <Text style={styles.bannerDesc}>
              Descubre estilos, tendencias y máxima comodidad en calzado urbano.
            </Text>
          </View>
        </ImageBackground>

        {/* 3. Saludo personalizado */}
        <View style={styles.saludoContainer}>
          <View>
            <Text style={styles.saludoTitulo}>Hola!👻</Text>
            <Text style={styles.saludoSub}>QUE BUSCAS?😎👽</Text>
          </View>
          <View style={styles.iconoPerfil}>
            <Ionicons name="bag-check" size={24} color="#FF2D55" />
          </View>
        </View>

        {/* 4. Bloque de Estadísticas (Actualizado a 5 secciones) */}
        <View style={styles.statsContainer}>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>5</Text>
            <Text style={styles.statLabel}>Secciones</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>100%</Text>
            <Text style={styles.statLabel}>Urbano</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>Expo</Text>
            <Text style={styles.statLabel}>Router</Text>
          </View>
        </View>

        {/* 5. Título de sección */}
        <Text style={styles.tituloSeccion}>Explorar RDURBAN-STORE</Text>

        {/* 6. Tarjeta de Formulario */}
        <Pressable 
          style={styles.tarjetaFila} 
          onPress={() => router.push('/formulario')}
        >
          <View style={styles.contenedorIcono}>
            <Ionicons name="document-text-outline" size={26} color="#FF2D55" />
          </View>
          <View style={styles.textoFilaContainer}>
            <Text style={styles.rowTitle}>FORMULARIO✅</Text>
            <Text style={styles.rowDesc}>Registra tus datos y preferencias de calzado.</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color="#888888" />
        </Pressable>

        {/* 7. Tres botones circulares juntos en fila (Catálogo, Contacto y Ubicación) */}
        <View style={styles.menuCircularContainer}>
          <Pressable style={styles.circularItem} onPress={() => router.push('/menu')}>
            <View style={styles.circularIcono}>
              <Ionicons name="images-outline" size={24} color="#FF2D55" />
            </View>
            <Text style={styles.circularTexto}>💲CATALOGO</Text>
          </Pressable>

          <Pressable style={styles.circularItem} onPress={() => router.push('/contacto')}>
            <View style={styles.circularIcono}>
              <Ionicons name="call-outline" size={24} color="#FF2D55" />
            </View>
            <Text style={styles.circularTexto}>😎CONTACTO😎</Text>
          </Pressable>

          <Pressable style={styles.circularItem} onPress={() => router.push('/ubicacion')}>
            <View style={styles.circularIcono}>
              <Ionicons name="location-outline" size={24} color="#FF2D55" />
            </View>
            <Text style={styles.circularTexto}>📍UBICACIÓN📍</Text>
          </Pressable>
        </View>

        {/* 8. Tarjeta destacada inferior (Zapato del día) */}
        <View style={styles.tarjetaEspecial}>
          <View style={styles.iconoEspecial}>
            <Ionicons name="star" size={24} color="#FFFFFF" />
          </View>
          <View style={styles.textoFilaContainer}>
            <Text style={styles.especialTitle}>Zapato del día</Text>
            <Text style={styles.especialDesc}>
              Prueba las zapatillas urbanas exclusivas con diseño moderno.
            </Text>
          </View>
        </View>

        {/* Footer */}
        <Text style={styles.footerText}>RDURBAN-STORE - Desarrollo Móvil</Text>
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
    padding: 16,
    paddingBottom: 40,
  },
  headerTop: {
    backgroundColor: '#1E1E1E',
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#333333',
  },
  headerInicio: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF2D55',
  },
  bannerContainer: {
    borderRadius: 18,
    overflow: 'hidden',
    backgroundColor: '#1A1A1A',
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#333333',
  },
  bannerOverlay: {
    padding: 20,
    backgroundColor: 'rgba(15, 15, 15, 0.9)',
  },
  bannerSubTag: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#FF2D55',
    letterSpacing: 1,
    marginBottom: 6,
  },
  bannerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 6,
  },
  bannerDesc: {
    fontSize: 13,
    color: '#CCCCCC',
    lineHeight: 18,
  },
  saludoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1A1A1A',
    padding: 16,
    borderRadius: 14,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#333333',
  },
  saludoTitulo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  saludoSub: {
    fontSize: 13,
    color: '#AAAAAA',
    marginTop: 3,
  },
  iconoPerfil: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#2A1218',
    justifyContent: 'center',
    alignItems: 'center',
  },
  statsContainer: {
    flexDirection: 'row',
    backgroundColor: '#1A1A1A',
    borderRadius: 14,
    paddingVertical: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#333333',
  },
  statBox: {
    flex: 1,
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF2D55',
  },
  statLabel: {
    fontSize: 12,
    color: '#AAAAAA',
    marginTop: 3,
  },
  statDivider: {
    width: 1,
    backgroundColor: '#333333',
  },
  tituloSeccion: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 14,
  },
  tarjetaFila: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1A1A1A',
    padding: 16,
    borderRadius: 14,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#333333',
  },
  contenedorIcono: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: '#2A1218',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },
  textoFilaContainer: {
    flex: 1,
  },
  rowTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  rowDesc: {
    fontSize: 12,
    color: '#AAAAAA',
    marginTop: 3,
  },
  menuCircularContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  circularItem: {
    alignItems: 'center',
    width: '31%',
    backgroundColor: '#1A1A1A',
    paddingVertical: 14,
    paddingHorizontal: 4,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#333333',
  },
  circularIcono: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#2A1218',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 6,
  },
  circularTexto: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  tarjetaEspecial: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1E1215',
    padding: 16,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#FF2D55',
    marginBottom: 14,
  },
  iconoEspecial: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: '#FF2D55',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },
  especialTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  especialDesc: {
    fontSize: 12,
    color: '#CCCCCC',
    marginTop: 3,
  },
  footerText: {
    textAlign: 'center',
    color: '#777777',
    fontSize: 12,
    marginTop: 10,
  },
});