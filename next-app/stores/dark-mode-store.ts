import { create } from "zustand";
import { persist } from "zustand/middleware";

interface DarkModeStore {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const useDarkModeStore = create<DarkModeStore>()(
  persist(
    (set) => ({
      isDarkMode: false,
      toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
    }),
    {
      name: "dark-mode-store",
      getStorage: () => localStorage,
    }
  )
);

export default useDarkModeStore;
