import { router } from 'expo-router';
import { useState } from 'react';
import { Alert, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { supabase } from '../../lib/supabase'; // Importación correcta desde src/app/(auth)/registro.tsx

export default function RegistroScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    // 1. Validar campos vacíos
    if (!email || !password || !confirmPassword) {
      Alert.alert('Campos incompletos', 'Por favor llena todos los campos.');
      return;
    }

    // 2. Validar formato de correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      Alert.alert('Correo inválido', 'Por favor ingresa un correo electrónico válido.');
      return;
    }

    // 3. Validar longitud mínima de la contraseña
    if (password.length < 6) {
      Alert.alert('Contraseña muy corta', 'La contraseña debe tener al menos 6 caracteres.');
      return;
    }

    // 4. Validar que las contraseñas coincidan
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Las contraseñas no coinciden.');
      return;
    }

    setLoading(true);

    // 5. Intentar registrar en Supabase
    const { data, error } = await supabase.auth.signUp({
      email: email.trim().toLowerCase(),
      password: password.trim(),
    });

    setLoading(false);

    if (error) {
      // Validar si el correo ya existe o si hay algún error del servidor
      if (
        error.message.includes('already registered') ||
        error.message.includes('already exists') ||
        error.status === 400
      ) {
        Alert.alert(
          'Correo registrado',
          'Este correo ya está en uso. Por favor inicia sesión o usa un correo diferente.'
        );
      } else if (error.message.includes('rate limit')) {
        Alert.alert(
          'Límite de envíos',
          'Se ha superado el límite de intentos. Por favor espera unos minutos o crea el usuario desde el panel de Supabase.'
        );
      } else {
        Alert.alert('Error al registrarse', error.message);
      }
      return;
    }

    // Validación extra por si Supabase devuelve identidad vacía para correos existentes
    if (data.user && data.user.identities && data.user.identities.length === 0) {
      Alert.alert(
        'Correo registrado',
        'Este correo ya se encuentra registrado. Por favor intenta iniciar sesión.'
      );
      return;
    }

    Alert.alert(
      '¡Registro exitoso!',
      'Tu cuenta ha sido creada correctamente. Ahora puedes iniciar sesión.',
      [
        {
          text: 'OK',
          onPress: () => router.replace('/login'),
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>😎👽RDURBAN-STORE😎👽</Text>
      <Text style={styles.subtitle}>Crear Nueva Cuenta</Text>

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
        placeholder="Contraseña (mínimo 6 caracteres)"
        placeholderTextColor="#888"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TextInput
        style={styles.input}
        placeholder="Confirmar Contraseña"
        placeholderTextColor="#888"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />

      <Pressable style={styles.button} onPress={handleRegister} disabled={loading}>
        <Text style={styles.buttonText}>{loading ? 'Creando cuenta...' : 'Registrarse'}</Text>
      </Pressable>

      {/* Botón para regresar al Login */}
      <Pressable style={styles.loginButton} onPress={() => router.replace('/login')}>
        <Text style={styles.loginText}>
          ¿Ya tienes una cuenta? <Text style={styles.loginLink}>Inicia sesión</Text>
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
  loginButton: {
    marginTop: 20,
    alignItems: 'center',
    padding: 10,
  },
  loginText: {
    color: '#AAAAAA',
    fontSize: 14,
  },
  loginLink: {
    color: '#FF2D55',
    fontWeight: 'bold',
  },
});