import { router } from 'expo-router';

import { useEffect, useState } from 'react';

import { ActivityIndicator, FlatList, Pressable, StyleSheet, Text, View } from 'react-native';

import { supabase } from '../../lib/supabase';



export default function RegistrosScreen() {

  const [registros, setRegistros] = useState<any[]>([]);

  const [cargando, setCargando] = useState(true);



  useEffect(() => {

    fetchRegistros();

  }, []);



  const fetchRegistros = async () => {

    try {

      setCargando(true);

      const { data, error } = await supabase

        .from('zapatos')

        .select('*')

        .order('id', { ascending: false });



      if (error) {

        console.log('Error al obtener registros:', error);

      } else {

        setRegistros(data || []);

      }

    } catch (error) {

      console.log(error);

    } finally {

      setCargando(false);

    }

  };



  return (

    <View style={styles.container}>

      <Pressable style={styles.botonVolver} onPress={() => router.back()}>

        <Text style={styles.textoBotonVolver}>← Volver</Text>

      </Pressable>



      <Text style={styles.titulo}>Lista de Pedidos Guardados</Text>



      {cargando ? (

        <ActivityIndicator size="large" color="#FF1744" style={{ marginTop: 40 }} />

      ) : (

        <FlatList

          data={registros}

          keyExtractor={(item) => item.id.toString()}

          renderItem={({ item }) => (

            <View style={styles.card}>

              <Text style={styles.itemTexto}><Text style={styles.label}>Cliente:</Text> {item.nombre}</Text>

              <Text style={styles.itemTexto}><Text style={styles.label}>Calzado:</Text> {item.marca}</Text>

              <Text style={styles.itemTexto}><Text style={styles.label}>Talla:</Text> {item.talla}</Text>

              <Text style={styles.itemTexto}><Text style={styles.label}>Precio:</Text> ${Number(item.precio).toLocaleString('es-CO')}</Text>

              <Text style={styles.itemTexto}><Text style={styles.label}>Cantidad:</Text> {item.stock}</Text>

              <Text style={styles.itemTexto}><Text style={styles.label}>Pago:</Text> {item.tipo_pago}</Text>

            </View>

          )}

          ListEmptyComponent={

            <Text style={styles.vacio}>No hay registros guardados todavía.</Text>

          }

        />

      )}

    </View>

  );

}



const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#111',

    padding: 20,

    paddingTop: 40,

  },

  botonVolver: {

    marginBottom: 10,

  },

  textoBotonVolver: {

    color: '#FF1744',

    fontSize: 16,

    fontWeight: 'bold',

  },

  titulo: {

    fontSize: 20,

    fontWeight: 'bold',

    color: '#FFF',

    marginBottom: 20,

    textAlign: 'center',

  },

  card: {

    backgroundColor: '#1E1E1E',

    padding: 15,

    borderRadius: 12,

    marginBottom: 12,

    borderWidth: 1,

    borderColor: '#333',

  },

  itemTexto: {

    color: '#FFF',

    fontSize: 14,

    marginBottom: 4,

  },

  label: {

    fontWeight: 'bold',

    color: '#FF1744',

  },

  vacio: {

    color: '#888',

    textAlign: 'center',

    marginTop: 40,

    fontSize: 16,

  },

}); 