import { create } from 'zustand';

interface OpensLayoutsState {
    cartOpen: boolean;
    setCartOpen: (open: boolean) => void;
}

export const useOpensLayouts = create<OpensLayoutsState>((set) => ({
    cartOpen: false,
    setCartOpen: (open: boolean) => set({ cartOpen: open }),
}));
