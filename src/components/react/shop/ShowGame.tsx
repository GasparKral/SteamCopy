import type { Game } from '@/types/Game';

import { useStore } from '@nanostores/react';
import { Heart } from '@/assets/Heart';
import { Cart } from '@/assets/Cart';
import { GameTag } from '@reactC/shop/subComponents/GameTag';
import { useMemo, useState } from 'react';
import { Price } from '@reactC/shop/subComponents/Price';
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

export const ShowGame = ({ game }: { game: Game }) => {
    const $cart = useStore(cart);
    const $whistList = useStore(whistList);
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

    useMemo(() => {
        if (isGameInWhistlist(game)) {
            setIsLoved(true);
        }
    }, [$whistList]);

    return (
        <section className='w-4/5 flex columns-2 gap-4 overflow-hidden border-dark-primary-blue rounded flex-1 relative bg-dark-primary-blue hover:shadow-lg transition-all duration-300 min-h-[250px]'>
            <a
                href={game.url}
                data-astro-prefetch='load'
                className='flex-1 max-w-[550px]'
            >
                <img
                    className='shadow-right h-full object-cover  '
                    src={game.img}
                    alt={`Banner of ${game.name}`}
                />
            </a>
            <article className='p-6 pl-0'>
                <h2 className='text-4xl'>{game.name}</h2>
                <Price
                    price={game.price}
                    offert={game.offert}
                    offertedPrice={game.offertedPrice}
                />
                <button
                    className={`absolute top-6 right-4 p-1 rounded group transition-all duration-200 ${
                        isLoved
                            ? 'bg-red-500/20 hover:bg-gray-blue'
                            : 'bg-gray-blue hover:bg-red-500/20'
                    }`}
                    onClick={() => handleLove(game)}
                >
                    <Heart
                        styles={`${
                            isLoved
                                ? 'text-red-500 group-hover:text-accent-blue transition-all duration-200'
                                : 'group-hover:text-red-500 transition-all duration-200'
                        }`}
                    />
                </button>
                <div className='flex gap-2 justify-between w-fit absolute bottom-14'>
                    <a
                        href='/pagos'
                        className='bg-desaturated-green/80 text-saturated-green hover:bg-desaturated-green px-2 py-1 rounded-md transition-colors duration-200'
                    >
                        {game.price === 0
                            ? 'Añadir a la biblioteca'
                            : 'Compra ya!'}
                    </a>
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
                </div>
                <div className='flex gap-2 absolute bottom-6'>
                    {game.tags.split(',').map((tag) => (
                        <GameTag
                            key={tag + game.name}
                            tag={tag}
                        />
                    ))}
                </div>
            </article>
        </section>
    );
};
