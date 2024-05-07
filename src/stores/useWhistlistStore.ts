import { atom } from 'nanostores';
import type { Game } from 'types/Game';

export const whistList = atom<Game[]>([]);

export const addToWhistlist = (game: Game) => {
    whistList.set([...whistList.get(), game]);
};

export const removeFromWhistlist = (game: Game) => {
    const whistlistGames = whistList.get();
    const newWhistlistGames = whistlistGames.filter(
        (whistlistGame) => whistlistGame.id !== game.id
    );
    whistList.set(newWhistlistGames);
};

export const clearWhistlist = () => whistList.set([]);

export const isGameInWhistlist = (game: Game) =>
    !!whistList.get().find((whistlistGame) => whistlistGame.id === game.id);

export const whistlistLength = () => whistList.get().length;
