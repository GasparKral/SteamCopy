import type { Game } from '@/types/Game';

import { removeFromCart } from '@stores/useCartStore';
import { motion } from 'framer-motion';
export const CartGameComponent = ({ game }: { game: Game }) => {
    return (
        <li className='flex w-full columns-2 py-2 px-2 hover:bg-gray-blue hover:shadow-lg transition-all duration-300 relative group '>
            <img
                className='aspect-square w-16 object-cover rounded-md'
                src={game.img}
                alt={game.name}
            />
            <div className='px-3 flex flex-col overflow-auto pt-1'>
                <h3
                    className='text-lg truncate max-w-48'
                    style={{ lineHeight: '14px' }}
                >
                    {game.name}
                </h3>
                <small className='text-[12px] text-neutral-50'>
                    {game.price}€
                </small>
                <motion.button
                    className='text-sm text-red-500/80 hover:text-red-500 mt-1 opacity-0 w-fit group-hover:opacity-100 transition-opacity duration-300'
                    onClick={() => removeFromCart(game)}
                >
                    Eliminar
                </motion.button>
            </div>
        </li>
    );
};
