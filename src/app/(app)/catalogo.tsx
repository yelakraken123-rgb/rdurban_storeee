import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { supabase } from '../../lib/supabase';

type Item = {
  id: number;
  nombre: string;
  marca: string;
  talla: number;
  precio: number;
  stock: number;
  imagen_url: string | null;
  created_at: string;
  tipo_pago: string;
};

export default function CatalogoScreen() {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);
  const [errorTexto, setErrorTexto] = useState('');

  useEffect(() => {
    fetchCatalogo();
  }, []);

  const fetchCatalogo = async () => {
    try {
      setLoading(true);
      setErrorTexto('');

      const { data, error } = await supabase
        .from('zapatos')
        .select('*');

      if (error) {
        const mensaje =
          error instanceof Error
            ? error.message
            : typeof error === "object" && error !== null && "message" in error
            ? String((error as any).message)
            : String(error);

        setErrorTexto("No fue posible cargar: " + mensaje);
        setItems([]);
      } else if (data) {
        setItems(data as Item[]);
      }
    } catch (error) {
      const mensaje =
        error instanceof Error
          ? error.message
          : typeof error === "object" && error !== null && "message" in error
          ? String((error as any).message)
          : String(error);

      setErrorTexto("No fue posible cargar: " + mensaje);
      setItems([]);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#ff3333" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Catálogo de Zapatos</Text>

      {errorTexto ? <Text style={styles.errorText}>{errorTexto}</Text> : null}

      <FlatList
        data={items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() =>
              router.push({
                pathname: '/detalle',
                params: {
                  id: String(item.id),
                  nombre: String(item.nombre || ''),
                  marca: String(item.marca || ''),
                  talla: String(item.talla || ''),
                  precio: String(item.precio || 0),
                  stock: String(item.stock || 0),
                  imagen_url: String(item.imagen_url || ''),
                  tipo_pago: String(item.tipo_pago || ''),
                },
              })
            }
          >
            <View style={styles.card}>
              <View style={styles.row}>
                <Text style={styles.nombre}>{item.nombre}</Text>
                <Text style={styles.precio}>${item.precio.toLocaleString()}</Text>
              </View>
              <Text style={styles.marcaText}>Marca: {item.marca}</Text>
              <View style={styles.divider} />
              <View style={styles.footerRow}>
                <Text style={styles.subText}>ID: #{item.id}</Text>
                <Text style={styles.subText}>Talla: {item.talla}</Text>
                <Text style={styles.subText}>Stock: {item.stock}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    padding: 16,
  },
  loaderContainer: {
    flex: 1,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginVertical: 16,
  },
  errorText: {
    color: '#ff3333',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 12,
  },
  card: {
    backgroundColor: '#1a1a1a',
    borderRadius: 10,
    padding: 16,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#ff3333',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  nombre: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    flex: 1,
  },
  precio: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ff3333',
  },
  marcaText: {
    fontSize: 14,
    color: '#cccccc',
    marginBottom: 8,
  },
  divider: {
    height: 1,
    backgroundColor: '#333333',
    marginVertical: 8,
  },
  footerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  subText: {
    fontSize: 12,
    color: '#aaaaaa',
  },
});