import { create } from 'zustand';

import type { Whistlist } from '@/types/Whistlist';
import type { Game } from '@/types/Game';
import { WhisList } from 'astro:db';

interface WhistListState {
    whisList: Whistlist;
    addToWhistList: (game: Game) => void;
    removeFromWhistList: (game: Game) => void;
    addAllToWhistList: (games: Game[]) => void;
    getAllWhistList: () => Whistlist;
    getGameByID: (id: number) => Game;
}

const emptyWhistList: Whistlist = {
    listOfGames: [],
};

export const useWhistListStore = create<WhistListState>((set, get) => ({
    whisList: emptyWhistList,
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
                    (item) => item.Games.id !== game.Games.id
                ),
            },
        }));
    },

    addAllToWhistList: (games: Game[]) => {
        set((state) => ({
            whisList: {
                ...state.whisList,
                listOfGames: [...state.whisList.listOfGames, ...games],
            },
        }));
    },

    getAllWhistList: () => {
        return get().whisList;
    },

    getGameByID(id: number): Game {
        const game = get().whisList.listOfGames.find(
            (game) => game.Games.id === id
        );
        if (!game) {
            throw new Error(`Game with id ${id} not found`);
        }
        return game;
    },
}));
