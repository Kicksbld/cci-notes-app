import { SignIn } from "@/components/credentials/signIn";
import { authClient } from "@/lib/auth-client";
import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CCILogo from "../assets/images/logo/CCI_logo.svg";
import { router } from "expo-router";
import { Text } from "react-native";
import { useAuthStore } from "@/store/useAuthStore";

export default function Index() {
  const { data: session, isPending } = authClient.useSession();
  const setSession = useAuthStore((state) => state.setSession);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    await authClient.signIn.email(
      {
        email,
        password,
      },
      {
        onSuccess: (ctx) => {
          router.replace("/(tabs)/(protected)");
        },
      }
    );
  };

  useEffect(() => {
    if (isPending) return;

    if (session?.session?.token) {
      setSession(session);
      router.replace("/(tabs)/(protected)");
    } else {
      setSession(null);
    }
  }, [session, isPending]);

  return (
    <SafeAreaView className="flex-1 gap-14 items-center bg-white">
      <CCILogo width={319} height={163} />
      <SignIn
        onPress={handleLogin}
        output={{ email, setEmail, password, setPassword }}
      />
      <Text onPress={() => router.replace("/(tabs)/(protected)")}>test</Text>
    </SafeAreaView>
  );
}
