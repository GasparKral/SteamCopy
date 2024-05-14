import type { Game } from '@/types/Game';
import type { APIRoute } from 'astro';

import { db, Games, GamesTags, Tags, eq, sql } from 'astro:db';

interface Request {
    search: string;
}

const res = (
    body: string,
    {
        status,
        statusText,
        headers,
    }: {
        status?: number;
        statusText?: string;
        headers?: Record<string, string>;
    }
) => new Response(body, { status, statusText, headers });

export const POST: APIRoute = async ({ request }) => {
    const { search } = (await request.json()) as Request;

    if (search != undefined || search != null || search != '') {
        const games: Game[] = await db
            .select({
                id: Games.id,
                name: Games.name,
                img: Games.img,
                price: Games.price,
                url: Games.url,
                tags: sql<string>`GROUP_CONCAT(${Tags.name})`.as('tags'),
                offert: Games.offert,
                offertedPrice: Games.offertedPrice,
                totalReviews: Games.totalReviews,
                badReviews: Games.badReviews,
            })
            .from(Games)
            .innerJoin(GamesTags, eq(Games.id, GamesTags.game))
            .innerJoin(Tags, eq(GamesTags.tag, Tags.id))
            .groupBy(Games.id);

        if (games.length === 0) {
            return res('games not found', { status: 404 });
        }

        const filteredGames = games.filter((game) =>
            search != ''
                ? game.name.toLowerCase().includes(search.toLowerCase())
                : false
        );

        return res(JSON.stringify(filteredGames), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } else {
        return res('bad request', { status: 400 });
    }
};
