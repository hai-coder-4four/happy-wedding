import { create } from "zustand";

type WeddingStore = {
  isWelcome: boolean;
};

type WeddingStoreAction = {
  setIsWelcome: (isWelcome: boolean) => void;
};

export const useWeddingStore = create<WeddingStoreAction & WeddingStore>(
  (set) => ({
    isWelcome: false,
    setIsWelcome: (isWelcome) => set({ isWelcome }),
  })
);
