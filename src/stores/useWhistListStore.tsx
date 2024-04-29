import { create } from 'zustand';
import type { Whistlist } from '@/types/Whistlist';
import type { Game } from '@/types/Game';
import { GamesMoks } from 'data/GamesMoks';

interface WhistListState {
    whisList: Whistlist;
    addToWhistList: (game: Game) => void;
    removeFromWhistList: (game: Game) => void;
    findGameForId: (id: string) => boolean;
}

export const useWhistListStore = create<WhistListState>((set) => ({
    whisList: {
        listOfGames: [GamesMoks[0], GamesMoks[1]],
    },

    addToWhistList: (game: Game) => {
        set((state) => ({
            whisList: {
                ...state.whisList,
                listOfGames: [...state.whisList.listOfGames, game],
            },
        }));
    },

    removeFromWhistList: (game: Game) => {
        set((state) => ({
            whisList: {
                ...state.whisList,
                listOfGames: state.whisList.listOfGames.filter(
                    (item) => item.id !== game.id
                ),
            },
        }));
    },

    findGameForId: (id: string): boolean => {
        const game = GamesMoks.find((game) => game.id === id);
        if (game) {
            return true;
        }

        return false;
    },
}));
