import { create } from 'zustand';
import type { Game } from 'types/Game';

type CartState = {
    cart: Game[];
    addToCart: (game: Game) => void;
    removeFromCart: (game: Game) => void;
    clearCart: () => void;
    findGameForId: (id: string) => boolean;
};

export const useCartStore = create<CartState>((set, get) => ({
    cart: [],

    addToCart: (game: Game) => {
        set((state) => ({
            cart: [...state.cart, game],
        }));
    },

    removeFromCart: (game: Game) => {
        set((state) => ({
            cart: state.cart.filter((item) => item.id !== game.id),
        }));
    },

    clearCart: () => {
        set({ cart: [] });
    },

    findGameForId: (id: string): boolean => {
        const game = get().cart.find((game) => game.id === id);
        if (game) {
            return true;
        }
        return false;
    },
}));
