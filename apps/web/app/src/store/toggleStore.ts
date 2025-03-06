import { create } from "zustand";

interface ToggleState {
  isOn: boolean;
  toggle: () => void;
}

const useToggleStore = create<ToggleState>((set) => ({
  isOn: false,
  toggle: () => set((state) => ({ isOn: !state.isOn })),
}));

export default useToggleStore;
