import { Ionicons } from '@expo/vector-icons';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { router } from 'expo-router';
import { useState } from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

export default function EscanearScreen() {
  const [facing, setFacing] = useState<'front' | 'back'>('back');
  const [permission, requestPermission] = useCameraPermissions();
  const [scannedData, setScannedData] = useState<string | null>(null);

  // Si los permisos aún están cargando
  if (!permission) {
    return <View style={styles.container} />;
  }

  // Si el usuario no ha otorgado permisos de cámara
  if (!permission.granted) {
    return (
      <View style={styles.permissionContainer}>
        <Ionicons name="camera-outline" size={64} color="#ff3333" style={{ marginBottom: 16 }} />
        <Text style={styles.message}>Necesitamos tu permiso para usar la cámara y escanear códigos.</Text>
        <TouchableOpacity style={styles.buttonPermission} onPress={requestPermission}>
          <Text style={styles.buttonText}>Conceder Permiso</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.backButtonSimple} onPress={() => router.back()}>
          <Text style={styles.backTextSimple}>Volver</Text>
        </TouchableOpacity>
      </View>
    );
  }

  // Función cuando detecta un código de barras o QR
  const handleBarcodeScanned = ({ type, data }: { type: string; data: string }) => {
    setScannedData(data);
  };

  return (
    <View style={styles.container}>
      {/* Encabezado y Botón de Volver */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#ffffff" />
          <Text style={styles.backText}>Volver</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Escanear Producto</Text>
      </View>

      {/* Visor de la cámara */}
      <View style={styles.cameraContainer}>
        <CameraView
          style={styles.camera}
          facing={facing}
          onBarcodeScanned={scannedData ? undefined : handleBarcodeScanned}
        >
          <View style={styles.overlay}>
            <View style={styles.scanArea} />
          </View>
        </CameraView>
      </View>

      {/* Resultado del escaneo */}
      {scannedData ? (
        <View style={styles.resultContainer}>
          <Text style={styles.resultTitle}>¡Código Detectado!</Text>
          <Text style={styles.resultText}>{scannedData}</Text>
          <TouchableOpacity
            style={styles.buttonPermission}
            onPress={() => setScannedData(null)}
          >
            <Text style={styles.buttonText}>Escanear de nuevo</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.footer}>
          <Text style={styles.footerText}>Apunta la cámara hacia el código de barras o QR</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000', // Fondo negro
  },
  permissionContainer: {
    flex: 1,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  message: {
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 16,
    marginBottom: 20,
  },
  buttonPermission: {
    backgroundColor: '#ff3333', // Botón rojo
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginBottom: 12,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  backButtonSimple: {
    paddingVertical: 8,
  },
  backTextSimple: {
    color: '#aaaaaa',
    fontSize: 14,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 12,
    backgroundColor: '#000000',
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backText: {
    fontSize: 16,
    marginLeft: 6,
    color: '#ffffff',
    fontWeight: '600',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    flex: 1,
    textAlign: 'center',
    marginRight: 40,
  },
  cameraContainer: {
    flex: 1,
    margin: 16,
    borderRadius: 12,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#ff3333', // Marco rojo de la cámara
  },
  camera: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scanArea: {
    width: 250,
    height: 250,
    borderWidth: 2,
    borderColor: '#ff3333', // Cuadrado guía rojo
    backgroundColor: 'transparent',
    borderRadius: 12,
  },
  resultContainer: {
    padding: 20,
    backgroundColor: '#1a1a1a',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ff3333',
  },
  resultTitle: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  resultText: {
    color: '#ff3333',
    fontSize: 16,
    marginBottom: 16,
  },
  footer: {
    padding: 20,
    alignItems: 'center',
  },
  footerText: {
    color: '#aaaaaa',
    fontSize: 14,
    textAlign: 'center',
  },
});