import { create } from "zustand";

type State = {
  isOpen: boolean;
};
type Action = {
  setIsOpen: () => void;
};
export const useStore = create<State & Action>((set) => ({
  isOpen: true,
  setIsOpen: () => set((state) => ({ isOpen: !state.isOpen })),
}));
