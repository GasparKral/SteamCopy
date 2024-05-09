import { useStore } from '@nanostores/react';
import { whistList, whistlistLength } from '@stores/useWhistlistStore';
import { ShowGame } from '@reactC/generics/ShowGame';

export const ShowWhistList = () => {
    const $whistList = useStore(whistList);

    return (
        <>
            {whistlistLength() > 0 ? (
                $whistList.map((game) => (
                    <ShowGame
                        key={game.id}
                        game={game}
                    />
                ))
            ) : (
                <a
                    href='/tienda/descubre'
                    className='text-7xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hover:text-accent-blue transition-colors duration-400'
                >
                    Busca nuevos juegos
                </a>
            )}
        </>
    );
};
