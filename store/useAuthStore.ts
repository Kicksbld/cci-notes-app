import { currentSessionProps } from "@/lib/interfaces/auth.interface";
import { create } from "zustand";

type AuthState = {
  session: currentSessionProps | null;
  setSession: (session: currentSessionProps | null) => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  session: null,
  setSession: (session) => set({ session }),
}));
