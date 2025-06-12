import { Stack } from "expo-router";
import "../global.css";
import { useSyncSessionWithStore } from "@/hooks/useSyncSessionWithStore";

export default function RootLayout() {
  useSyncSessionWithStore();
  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{ headerShown: false, gestureEnabled: false }}
      />
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
}
