import { create } from 'zustand';

// Define the state type
type CounterState = {
  count: number;
  increase: () => void;
  decrease: () => void;
};

// Create Zustand store
export const useCounterStore = create<CounterState>((set) => ({
  count: 0,
  increase: () => set((state) => ({ count: state.count + 1 })),
  decrease: () => set((state) => ({ count: state.count - 1 })),
}));
    
export default useCounterStore;