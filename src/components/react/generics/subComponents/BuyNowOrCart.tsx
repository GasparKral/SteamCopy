import type { Game } from '@/types/Game';

import { Cart } from '@/assets/Cart';
import { useStore } from '@nanostores/react';
import { useState, useMemo } from 'react';
import {
    cart,
    isGameInCart,
    removeFromCart,
    addToCart,
} from '@stores/useCartStore';
import {
    whistList,
    isGameInWhistlist,
    addToWhistlist,
    removeFromWhistlist,
} from '@stores/useWhistlistStore';
import { lib, addGameToLib, isGameInLib } from '@stores/useLibStore';
export const BuyNowOrCart = ({ game }: { game: Game }) => {
    const $cart = useStore(cart);
    const $whistList = useStore(whistList);
    const $lib = useStore(lib);
    const [isLoved, setIsLoved] = useState(isGameInWhistlist(game));

    const handleLove = (game: Game) => {
        if (isGameInWhistlist(game)) {
            removeFromWhistlist(game);
            setIsLoved(false);
        } else {
            addToWhistlist(game);
            setIsLoved(true);
        }
    };
    const handleCart = (game: Game) => {
        if (isGameInCart(game)) {
            removeFromCart(game);
        } else {
            addToCart(game);
        }
    };
    const handleLib = (game: Game) => {
        if (!isGameInLib(game)) {
            addGameToLib(game);
        } else {
            return;
        }
    };

    useMemo(() => {
        if (isGameInWhistlist(game)) {
            setIsLoved(true);
        }
    }, [$whistList]);

    return (
        <div className='flex gap-2 justify-between w-fit absolute bottom-16'>
            {game.price === 0 ? (
                <button
                    onClick={() => handleLib(game)}
                    className='bg-desaturated-green/80 text-saturated-green hover:bg-desaturated-green px-2 py-1 rounded-md transition-colors duration-200'
                >
                    {isGameInLib(game)
                        ? 'Ya en libreria'
                        : 'Añadir a la biblioteca'}
                </button>
            ) : (
                <a
                    href='/pagos'
                    className='bg-desaturated-green/80 text-saturated-green hover:bg-desaturated-green px-2 py-1 rounded-md transition-colors duration-200'
                >
                    Compra ya!
                </a>
            )}
            {game.price === 0 ? null : (
                <button
                    onClick={() => handleCart(game)}
                    className={`${
                        isGameInCart(game)
                            ? 'bg-accent-blue hover:bg-red-500/60'
                            : 'bg-accent-blue/20  hover:bg-accent-blue/80'
                    } hover:text-neutral-50 p-1 rounded-md transition-colors duration-200`}
                >
                    <Cart />
                </button>
            )}
        </div>
    );
};
