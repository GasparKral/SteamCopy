import { Arrow } from '@assets/Arrow';
import { GameTag } from '@reactC/shop/subComponents/GameTag';
import { useState, useMemo } from 'react';
import { Cart } from '@/assets/Cart';
import { Heart } from '@/assets/Heart';
import { useCartStore } from '@stores/useCartStore';
import { useWhistListStore } from '@stores/useWhistListStore';

import type { Game } from 'types/Game';

export const Recomendeds = ({ games }: { games: Game[] }) => {
    const cart = useCartStore((state) => state);
    const whisList = useWhistListStore((state) => state);

    const [index, setIndex] = useState(0);
    const [isLoved, setIsLoved] = useState(
        whisList.findGameForId(games[index].id)
    );
    const [isCart, setIsCart] = useState(cart.findGameForId(games[index].id));

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

    const { name, img, price, tags } = games[index];
    const href = `/games/${name.replaceAll(' ', '-')}`;

    const handleLove = () => {
        if (isLoved) {
            whisList.removeFromWhistList(games[index]);
            setIsLoved(false);
        } else {
            whisList.addToWhistList(games[index]);
            setIsLoved(true);
        }
    };

    const handleCart = (game: Game) => {
        if (isCart) {
            cart.removeFromCart(game);
            setIsCart(false);
        } else {
            cart.addToCart(game);
            setIsCart(true);
        }
    };

    useMemo(() => {
        setIsLoved(whisList.findGameForId(games[index].id));
        setIsCart(cart.findGameForId(games[index].id));
    }, [index]);

    return (
        <section className='w-4/5 flex flex-col gap-4'>
            <h2 className='text-5xl ml-10'>Recomendados:</h2>
            <div className='flex columns-3 w-full h-80 gap-4 justify-between'>
                <button onClick={previousGame}>
                    <Arrow styles='rotate-180 hover:drop-shadow-blue-accent' />
                </button>
                <article className='flex columns-2 gap-4 overflow-hidden border-dark-primary-blue rounded flex-1 relative bg-dark-primary-blue hover:shadow-lg transition-all duration-300'>
                    <a
                        href={href}
                        data-astro-prefetch='load'
                    >
                        <img
                            className='shadow-right h-full'
                            src={img}
                            alt={`Banner of ${name}`}
                        />
                    </a>
                    <article className='p-6 pl-0'>
                        <h2 className='text-4xl'>{name}</h2>
                        <p>{price}€</p>

                        <button
                            className={`absolute top-6 right-4 p-1 rounded group transition-all duration-200 ${
                                isLoved
                                    ? 'bg-red-500/20 hover:bg-gray-blue'
                                    : 'bg-gray-blue hover:bg-red-500/20'
                            }`}
                            onClick={handleLove}
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
                                className='bg-accent-blue/20 text-neutral-50/80 hover:bg-accent-blue/80 hover:text-neutral-50 p-1 rounded-md transition-colors duration-200'
                                onClick={() => handleCart(games[index])}
                            >
                                <Cart styles='' />
                            </button>
                        </div>
                        <div className='flex gap-2 absolute bottom-6'>
                            {tags.map((tag) => (
                                <GameTag
                                    key={tag}
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
        </section>
    );
};
