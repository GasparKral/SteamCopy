import type { Game } from '@/types/Game';

export const ShowSearchGames = ({ games }: { games: Game[] }) => {
    return (
        <ul
            className={
                games.length === 0
                    ? 'hidden'
                    : 'absolute top-8 w-full bg-slate-500  rounded flex flex-col divide-y divide-slate-100'
            }
        >
            {games.slice(0, 5).map((game) => (
                <li key={game.id}>
                    <a
                        href={game.url}
                        className='flex columns-2 p-2 gap-4  bg-gradient-to-r from-dark-primary-blue/0 to-primary-blue/80 relative'
                    >
                        <img
                            className='aspect-square w-16 object-cover rounded-md'
                            src={game.img}
                            alt={game.name}
                        />
                        <div>
                            <h6 className='text-sm break-words'>{game.name}</h6>
                            <small className='relative bottom-1'>
                                {game.offert
                                    ? game.offertedPrice
                                    : game.price > 0
                                    ? game.price + '€'
                                    : 'Gratis'}
                            </small>
                        </div>
                    </a>
                </li>
            ))}
        </ul>
    );
};
