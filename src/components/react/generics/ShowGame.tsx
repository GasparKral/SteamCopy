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
import { lib, addGameToLib, isGameInLib } from '@stores/useLibStore';
import { motion } from 'framer-motion';

export const ShowGame = ({ game }: { game: Game }) => {
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
        <motion.section
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{
                opacity: 1,
                scale: 1,
                transition: { duration: 0.2, ease: 'linear' },
                type: 'tween',
            }}
            className='w-[calc(100%-2rem)] 2xl:w-4/5 flex columns-2 gap-4 overflow-hidden border-dark-primary-blue rounded flex-1 relative bg-dark-primary-blue hover:shadow-lg transition-all duration-300 max-h-[250px] min-h-[250px]'
        >
            <a
                href={game.url}
                data-astro-prefetch='load'
                className=' min-w-[550px]'
            >
                <img
                    className='shadow-right h-full object-cover  '
                    src={game.img}
                    alt={`Banner of ${game.name}`}
                />
            </a>
            <article className='p-6 pl-0'>
                <h2
                    className={`${
                        game.name.length > 30 ? 'text-3xl' : 'text-4xl'
                    }  break-words max-w-[350px]`}
                >
                    {game.name}
                </h2>
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
                <div className='flex gap-2 absolute bottom-6 overflow-hidden max-w-full'>
                    {game.tags.split(',').map((tag) => (
                        <GameTag
                            key={tag + game.name}
                            tag={tag}
                        />
                    ))}
                </div>
            </article>
        </motion.section>
    );
};
