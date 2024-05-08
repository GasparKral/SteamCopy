import type { Game } from '@/types/Game';
import { atom } from 'nanostores';

export const lib = atom<Game[]>([]);

export const addGameToLib = (game: Game) => {
    lib.set([...lib.get(), game]);
};

export const removeGameFromLib = (game: Game) => {
    const libGames = lib.get();
    const newLibGames = libGames.filter((libGame) => libGame.id !== game.id);
    lib.set(newLibGames);
};

export const isGameInLib = (game: Game) =>
    !!lib.get().find((libGame) => libGame.id === game.id);
