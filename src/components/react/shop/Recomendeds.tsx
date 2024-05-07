import { Arrow } from '@assets/Arrow';
import { GameTag } from '@reactC/shop/subComponents/GameTag';
import { useState, useEffect } from 'react';
import { Cart } from '@/assets/Cart';
import { Heart } from '@/assets/Heart';
import { useStore } from '@nanostores/react';
import { Price } from '@reactC/shop/subComponents/Price';
import {
    cart,
    addToCart,
    isGameInCart,
    removeFromCart,
} from '@stores/useCartStore';
import {
    whistList,
    isGameInWhistlist,
    addToWhistlist,
    removeFromWhistlist,
} from '@stores/useWhistlistStore';

import type { Game } from 'types/Game';

export const Recomendeds = ({ games }: { games: Game[] }) => {
    const $cart = useStore(cart);
    const $whistList = useStore(whistList);
    const [index, setIndex] = useState(0);
    const [isLoved, setIsLoved] = useState(isGameInWhistlist(games[index]));

    useEffect(() => {
        if (isGameInWhistlist(games[index])) {
            setIsLoved(true);
        } else {
            setIsLoved(false);
        }
    }, [index]);

    useEffect(() => {
        const updateRecomendedIndex = setInterval(() => {
            nextGame();
        }, 5000);
        return () => clearInterval(updateRecomendedIndex);
    }, [index, isLoved, $cart]);

    const nextGame = () => {
        if (index < games.length - 1) {
            setIndex(index + 1);
        } else {
            setIndex(0);
        }
    };

    const previousGame = () => {
        if (index > 0) {
            setIndex(index - 1);
        } else {
            setIndex(games.length - 1);
        }
    };

    const handleCart = (game: Game) => {
        if (isGameInCart(game)) {
            removeFromCart(game);
        } else {
            addToCart(game);
        }
    };

    const handleLove = (game: Game) => {
        if (isGameInWhistlist(game)) {
            removeFromWhistlist(game);
            setIsLoved(false);
        } else {
            addToWhistlist(game);
            setIsLoved(true);
        }
    };

    return (
        <section className='w-4/5 flex flex-col gap-4 mb-16 '>
            <h2 className='text-5xl ml-10'>Recomendados:</h2>
            <div className='flex columns-3 w-full h-96 gap-4 justify-between'>
                <button onClick={previousGame}>
                    <Arrow styles='rotate-180 hover:drop-shadow-blue-accent' />
                </button>
                <article className='flex columns-2 gap-4 overflow-hidden border-dark-primary-blue rounded flex-1 relative bg-dark-primary-blue hover:shadow-lg transition-all duration-300'>
                    <a
                        href={games[index].url}
                        data-astro-prefetch='load'
                        className='flex-1 max-w-[675px]'
                    >
                        <img
                            className='shadow-right h-full object-cover'
                            src={games[index].img}
                            alt={`Banner of ${games[index].name}`}
                        />
                    </a>
                    <article className='p-6 pl-0'>
                        <h2 className='text-4xl'>{games[index].name}</h2>
                        <Price
                            price={games[index].price}
                            offert={games[index].offert}
                            offertedPrice={games[index].offertedPrice}
                        />

                        <button
                            className={`absolute top-6 right-4 p-1 rounded group transition-all duration-200 ${
                                isLoved
                                    ? 'bg-red-500/20 hover:bg-gray-blue'
                                    : 'bg-gray-blue hover:bg-red-500/20'
                            }`}
                            onClick={() => handleLove(games[index])}
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
                                Compralo ya!
                            </a>
                            <button
                                onClick={() => handleCart(games[index])}
                                className={`${
                                    isGameInCart(games[index])
                                        ? 'bg-accent-blue hover:bg-red-500/60'
                                        : 'bg-accent-blue/20  hover:bg-accent-blue/80'
                                } hover:text-neutral-50 p-1 rounded-md transition-colors duration-200`}
                            >
                                <Cart />
                            </button>
                        </div>
                        <div className='flex gap-2 absolute bottom-6'>
                            {games[index].tags.split(',').map((tag) => (
                                <GameTag
                                    key={tag + games[index].name + index}
                                    tag={tag}
                                />
                            ))}
                        </div>
                    </article>
                </article>
                <button onClick={nextGame}>
                    <Arrow styles='hover:drop-shadow-blue-accent' />
                </button>
            </div>
            <div className='flex-1 flex gap-4 justify-center'>
                {games.map((game) => (
                    <div
                        onClick={() => setIndex(games.indexOf(game))}
                        key={game.id}
                        className={`max-w-[25px] w-1/3 rounded-full cursor-pointer ${
                            index === games.indexOf(game)
                                ? 'bg-accent-blue'
                                : ' bg-gray-blue'
                        }`}
                    >
                        <span className='opacity-0'>·</span>
                    </div>
                ))}
            </div>
        </section>
    );
};
