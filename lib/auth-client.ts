import { createAuthClient } from "better-auth/react";
import { expoClient } from "@better-auth/expo/client";
import * as SecureStore from "expo-secure-store";

export const authClient = createAuthClient({
  baseURL: "https://admin-cci-app-gota.vercel.app/", // Base URL of your Better Auth backend.
  plugins: [
    expoClient({
      scheme: "ccinotesapp",
      storagePrefix: "ccinotesapp",
      storage: SecureStore,
    }),
  ],
});
