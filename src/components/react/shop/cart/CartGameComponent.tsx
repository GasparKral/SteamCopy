import type { Game } from '@/types/Game';
import { removeFromCart } from '@stores/useCartStore';
export const CartGameComponent = ({ game }: { game: Game }) => {
    return (
        <li className='flex w-full columns-2 py-2 px-2 hover:bg-gray-blue  hover:shadow-lg transition-all duration-300 rounded-r relative group'>
            <img
                className='aspect-square w-16 object-cover rounded-md'
                src={game.img}
                alt={game.name}
            />
            <div className='px-4 flex flex-col overflow-auto'>
                <h3
                    className='text-lg truncate max-w-48'
                    style={{ lineHeight: '14px' }}
                >
                    {game.name}
                </h3>
                <small className='text-sm text-neutral-50'>{game.price}€</small>
                <button
                    className='text-sm text-red-500 hover:bg-red-500/20 px-2 py-1 relative  rounded hidden group-hover:block transition-colors'
                    onClick={() => removeFromCart(game)}
                >
                    Eliminar
                </button>
            </div>
        </li>
    );
};
