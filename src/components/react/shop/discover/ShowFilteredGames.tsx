import type { Game } from '@/types/Game';
import { useStore } from '@nanostores/react';
import { filter } from '@stores/useFiltersStores';
import { ShowGame } from '@reactC/generics/ShowGame';
import { lib } from '@stores/useLibStore';

export const ShowFilteredGames = ({ games }: { games: Game[] }) => {
    const $filter = useStore(filter);
    const $lib = useStore(lib);

    const filterByCategory = (games: Game[]) => {
        if ($filter.categories.length > 0) {
            return games.filter((game) => {
                return $filter.categories.every((category) => {
                    return game.tags.includes(category);
                });
            });
        } else {
            return games;
        }
    };

    const filterByPrice = (games: Game[]) => {
        const isOfferted = $filter.isOfferted;
        const [minPrice, maxPrice] = $filter.range;
        return games.filter(
            (game) =>
                (isOfferted
                    ? game.offertedPrice ?? Number.MAX_SAFE_INTEGER
                    : game.price) >= minPrice &&
                (isOfferted ? game.offertedPrice ?? 0 : game.price) <= maxPrice
        );
    };

    const filteByOffert = (games: Game[]) => {
        if ($filter.isOfferted) {
            return games.filter((game) => {
                if (!game.offert) {
                    return null;
                } else {
                    return game;
                }
            });
        } else {
            return games;
        }
    };

    const filterByIsInLib = (games: Game[]) => {
        return games.filter((game) => !$lib.includes(game));
    };

    const gamesToShow = filterByIsInLib(
        filteByOffert(filterByPrice(filterByCategory(games)))
    );

    return (
        <>
            {gamesToShow.map((game) => (
                <ShowGame
                    key={game.id}
                    game={game}
                />
            ))}
        </>
    );
};
