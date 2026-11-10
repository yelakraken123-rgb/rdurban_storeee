import { router } from 'expo-router';
import { useState } from 'react';
import { Alert, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { supabase } from '../../lib/supabase'; // Corregido a 3 niveles (../../) para llegar a src/lib/supabase

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Por favor llena todos los campos');
      return;
    }

    setLoading(true);
    
    // Usamos .trim() para evitar errores por espacios invisibles del teclado
    const { error } = await supabase.auth.signInWithPassword({
      email: email.trim().toLowerCase(),
      password: password.trim(),
    });

    setLoading(false);

    if (error) {
      Alert.alert('Error de acceso', error.message);
    } else {
      // Redirige correctamente a la pantalla principal raíz (index.tsx)
      router.replace('/'); 
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>😎👽RDURBAN-STORE😎👽</Text>
      <Text style={styles.subtitle}>Iniciar Sesión</Text>

      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        placeholderTextColor="#888"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        placeholderTextColor="#888"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <Pressable style={styles.button} onPress={handleLogin} disabled={loading}>
        <Text style={styles.buttonText}>{loading ? 'Verificando...' : 'Iniciar Sesión'}</Text>
      </Pressable>

      {/* Botón para ir a la pantalla de Registro */}
      <Pressable style={styles.registerButton} onPress={() => router.push('/registro')}>
        <Text style={styles.registerText}>
          ¿No tienes cuenta? <Text style={styles.registerLink}>Regístrate aquí</Text>
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0A0A',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FF2D55',
    textAlign: 'center',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 15,
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 30,
  },
  input: {
    backgroundColor: '#1A1A1A',
    color: '#FFFFFF',
    padding: 15,
    borderRadius: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#333333',
  },
  button: {
    backgroundColor: '#FF2D55',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  registerButton: {
    marginTop: 20,
    alignItems: 'center',
    padding: 10,
  },
  registerText: {
    color: '#AAAAAA',
    fontSize: 14,
  },
  registerLink: {
    color: '#FF2D55',
    fontWeight: 'bold',
  },
});