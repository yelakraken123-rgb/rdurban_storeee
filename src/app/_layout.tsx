import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    /* Contenedor principal de navegación en pila (Stack Navigator). 
        "headerShown: false" oculta por defecto la barra superior en todas las pantallas a menos que se indique lo contrario. */
    <Stack screenOptions={{ headerShown: false }}>
      
      {/* Pantalla principal de inicio (index) */}
      <Stack.Screen name="index" />
      
      {/* Pantalla del catálogo (menu) */}
      <Stack.Screen 
        name="menu" 
        options={{ 
          headerShown: true, 
          title: 'Catálogo' 
        }} 
      />
      
      {/* Pantalla de contacto y ubicación */}
      <Stack.Screen 
        name="contacto" 
        options={{ 
          headerShown: true, 
          title: 'Contacto' 
        }} 
      />

      {/* Pantalla del formulario de pedidos */}
      <Stack.Screen 
        name="formulario" 
        options={{ 
          headerShown: true, 
          title: 'Realizar Pedido' 
        }} 
      />

      {/* Pantalla de resultado del pedido */}
      <Stack.Screen 
        name="resultado" 
        options={{ 
          headerShown: true, 
          title: 'Resultado del Pedido' 
        }} 
      />

      {/* Pantalla de la lista de registros de Supabase */}
      <Stack.Screen 
        name="registros" 
        options={{ 
          headerShown: true, 
          title: 'Lista de Pedidos' 
        }} 
      />
      
      {/* Pantalla dinámica para el detalle de cada calzado */}
      <Stack.Screen 
        name="producto/[id]" 
        options={{ 
          headerShown: true, 
          title: 'Detalle del Calzado' 
        }} 
      />
    </Stack>
  );
}