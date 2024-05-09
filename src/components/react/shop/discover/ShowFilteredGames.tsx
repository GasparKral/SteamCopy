import type { Game } from '@/types/Game';
import { useStore } from '@nanostores/react';
import { filter } from '@stores/useFiltersStores';
import { ShowGame } from '@reactC/generics/ShowGame';
import { lib } from '@stores/useLibStore';
import { AnimatePresence } from 'framer-motion';

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
        const [minPrice, maxPrice] = $filter.range;
        return games.filter(
            (game) =>
                (game.offert
                    ? game.offertedPrice ?? Number.MAX_SAFE_INTEGER
                    : game.price) >= minPrice &&
                (game.offert ? game.offertedPrice ?? 0 : game.price) <= maxPrice
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

    const orderByName = (games: Game[]) => {
        return games.sort((a, b) => a.name.localeCompare(b.name));
    };

    const orderByNameInverted = (games: Game[]) => {
        return games.sort((a, b) => b.name.localeCompare(a.name));
    };

    const usablePrice = (game: Game) => {
        if (game.offert) {
            return game.offertedPrice;
        } else {
            return game.price;
        }
    };

    const orderByPrice = (games: Game[]) => {
        return games.slice().sort((a, b) => {
            const aPrice = usablePrice(a) || Number.MAX_SAFE_INTEGER;
            const bPrice = usablePrice(b) || 0;
            return aPrice - bPrice;
        });
    };

    const orderByPriceInverted = (games: Game[]) => {
        return games.slice().sort((a, b) => {
            const aPrice = usablePrice(a) || Number.MAX_SAFE_INTEGER;
            const bPrice = usablePrice(b) || 0;
            return bPrice - aPrice;
        });
    };

    const goodReviewPercent = (game: Game) => {
        if (!game.totalReviews || game.totalReviews === 0) {
            return 0;
        } else {
            const goodReviews = game.totalReviews - game.badReviews;
            return Math.round((goodReviews / game.totalReviews) * 100);
        }
    };

    const orderByGoodsReviews = (games: Game[]) => {
        return games.slice().sort((a, b) => {
            const aPrice = goodReviewPercent(a) || 0;
            const bPrice = goodReviewPercent(b) || 0;
            return bPrice - aPrice;
        });
    };

    const orderedGames = (games: Game[]) => {
        const idx = {
            'First Cheap': 0,
            'First Expensive': 1,
            Alphabetically: 2,
            'Alphabetically inverted': 3,
            'Most Popular': 4,
        }[$filter.orderBy];

        return idx === undefined
            ? games
            : [
                  orderByPrice,
                  orderByPriceInverted,
                  orderByName,
                  orderByNameInverted,
                  orderByGoodsReviews,
              ][idx](games);
    };

    const gamesOrdered = orderedGames(gamesToShow);

    return (
        <AnimatePresence>
            {gamesOrdered.map((game) => (
                <ShowGame
                    key={game.id}
                    game={game}
                />
            ))}
        </AnimatePresence>
    );
};
