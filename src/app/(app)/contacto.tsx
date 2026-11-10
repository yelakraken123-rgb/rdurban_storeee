import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function ContactoScreen() {
  return (
    <ImageBackground
      source={{ uri: 'https://i.pinimg.com/1200x/c8/b3/b1/c8b3b1d085cda402517078e60bb51a34.jpg' }}
      style={styles.background}
      imageStyle={{ opacity: 0.25 }}
    >
      <View style={styles.containerTransparent}>
        <Text style={styles.titulo}>
          RDURBAN-STORE
        </Text>
        <Text style={styles.subtitulo}>
          Canales de Contacto
        </Text>

        <View style={styles.tarjeta}>
          <View style={styles.itemFila}>
            <Ionicons name="call-outline" size={22} color="#FF1744" style={styles.icono} />
            <View>
              <Text style={styles.label}>Teléfono / WhatsApp</Text>
              <Text style={styles.texto}>+57 300 123 4567</Text>
            </View>
          </View>

          <View style={styles.divider} />

          <View style={styles.itemFila}>
            <Ionicons name="mail-outline" size={22} color="#FF1744" style={styles.icono} />
            <View>
              <Text style={styles.label}>Correo Electrónico</Text>
              <Text style={styles.texto}>yelakraken123@gmail.com</Text>
            </View>
          </View>

          <View style={styles.divider} />

          <View style={styles.itemFila}>
            <Ionicons name="logo-instagram" size={22} color="#FF1744" style={styles.icono} />
            <View>
              <Text style={styles.label}>Redes Sociales</Text>
              <Text style={styles.texto}>@rdurban_store</Text>
            </View>
          </View>
        </View>

        <Pressable
          style={styles.boton}
          onPress={() => router.back()}
        >
          <Text style={styles.botonTexto}>
            Regresar
          </Text>
        </Pressable>
      </View>
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
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    justifyContent: 'center',
    padding: 30,
  },
  titulo: {
    fontSize: 30,
    fontWeight: '800',
    color: '#FFFFFF',
    letterSpacing: -0.5,
  },
  subtitulo: {
    fontSize: 17,
    color: '#FF1744',
    marginTop: 5,
    marginBottom: 25,
    fontWeight: '600',
  },
  tarjeta: {
    backgroundColor: 'rgba(20, 20, 20, 0.92)',
    padding: 22,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: '#333333',
    shadowColor: '#FF1744',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 5,
  },
  itemFila: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
  },
  icono: {
    marginRight: 14,
  },
  label: {
    color: '#AAAAAA',
    fontSize: 11,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  texto: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
    marginTop: 2,
  },
  divider: {
    height: 1,
    backgroundColor: '#333333',
    marginVertical: 12,
  },
  boton: {
    backgroundColor: '#FF1744',
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: 'center',
    marginTop: 25,
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