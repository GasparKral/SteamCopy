import { useStore } from '@nanostores/react';
import { whistList } from '@stores/useWhistlistStore';
import { ShowGame } from '@reactC/generics/ShowGame';

export const ShowWhistList = () => {
    const $whistList = useStore(whistList);

    return (
        <>
            {$whistList.map((game) => (
                <ShowGame
                    key={game.id}
                    game={game}
                />
            ))}
        </>
    );
};
