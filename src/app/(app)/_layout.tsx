import { Stack } from "expo-router";

export default function AppLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#6B4234" },
        headerTintColor: "#FFFFFF",
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <Stack.Screen name="index" options={{ title: "Zapatos Store" }} />
      <Stack.Screen name="producto" options={{ title: "Productos" }} />
    </Stack>
  );
}