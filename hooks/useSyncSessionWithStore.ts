import { useEffect } from "react";
import { authClient } from "@/lib/auth-client";
import { useAuthStore } from "@/store/useAuthStore";

export const useSyncSessionWithStore = () => {
  const { data: sessionData } = authClient.useSession();
  const setSession = useAuthStore((state) => state.setSession);

  useEffect(() => {
    if (sessionData?.session?.token) {
      setSession(sessionData);
    } else {
      setSession(null);
    }
  }, [sessionData]);
};
