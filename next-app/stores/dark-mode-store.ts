import { create } from "zustand";
import { persist } from "zustand/middleware";

interface DarkModeStore {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

// TODO fix this
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
