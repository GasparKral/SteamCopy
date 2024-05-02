import type { Game } from '@/types/Game';
import type { APIRoute } from 'astro';

import { db, Carts, Games, GamesTags, Tags, eq } from 'astro:db';
import { res } from '@services/servicesEstructures/res';

const games: Game[] = await db
    .select()
    .from(Games)
    .innerJoin(GamesTags, eq(Games.id, GamesTags.game))
    .innerJoin(Tags, eq(GamesTags.tag, Tags.id))
    .where(eq(Tags.name, 'free'))
    .limit(3);

export const GET: APIRoute = async () => {
    if (games.length === 0) {
        return res('games not found', { status: 404 });
    }
    return res(JSON.stringify(games), { status: 200 });
};
