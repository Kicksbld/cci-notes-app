import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  ActivityIndicator,
  Button,
} from "react-native";
import CCILogo from "../../../assets/images/logo/CCI_logo.svg";
import { authClient } from "@/lib/auth-client";
import { useIsAppReady } from "@/lib/useIsAppReady";
import { useAuthStore } from "@/store/useAuthStore";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import { CurrentUserContextMenu } from "@/components/dashboard/menu";
import { CurrentUserNote } from "@/components/dashboard/note";

export default function Dashboard() {
  const { data: session, isPending } = authClient.useSession();
  const setSession = useAuthStore((state) => state.setSession);
  const currentSession = useAuthStore((state) => state.session);
  const isReady = useIsAppReady();
  const router = useRouter();

  useEffect(() => {
    if (!isReady || isPending) return;
    if (!session?.session?.token) {
      setSession(null);
      router.replace("/");
    } else {
      setSession(session);
    }
  }, [session, isPending, isReady]);

  if (!isReady || isPending || !session?.session?.token) {
    return (
      <SafeAreaView style={style.container}>
        <ActivityIndicator size="large" color="#10A8E1" />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={style.container}>
      <ScrollView contentContainerStyle={{ alignItems: "center", gap: 24 }}>
        <CCILogo width={109} height={56} />
        <CurrentUserContextMenu
          connectedUser={currentSession?.user.name ?? "Nan"}
        />
        <CurrentUserNote
          userNote={{
            courseTitle: "🇬🇧 Langue...",
            courseDate: "27 Dec",
            courseNote: 18,
            courseSubNote: 20,
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
});
