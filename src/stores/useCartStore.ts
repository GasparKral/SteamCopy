import { atom } from 'nanostores';
import type { Game } from 'types/Game';

export const cart = atom<Game[]>([]);

export const addToCart = (game: Game) => {
    cart.set([...cart.get(), game]);
};

export const removeFromCart = (game: Game) => {
    const cartGames = cart.get();
    const newCartGames = cartGames.filter(
        (cartGame) => cartGame.id !== game.id
    );
    cart.set(newCartGames);
};

export const clearCart = () => cart.set([]);

export const findGameInCart = (game: Game) =>
    cart.get().find((cartGame) => cartGame.id === game.id);

export const isGameInCart = (game: Game) => !!findGameInCart(game);

export const cartLength = () => cart.get().length;
