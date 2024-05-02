import type { Game } from '@/types/Game';
import type { APIRoute } from 'astro';

import { db, Games, GamesTags, Tags, eq } from 'astro:db';
import { res } from '@services/servicesEstructures/res';

export const GET: APIRoute = async () => {
    const games: Game[] = await db
        .select()
        .from(Games)
        .innerJoin(GamesTags, eq(Games.id, GamesTags.game))
        .innerJoin(Tags, eq(GamesTags.tag, Tags.id))
        .where(eq(Tags.name, 'free'))
        .limit(3);
    if (games.length === 0) {
        return res('games not found', { status: 404 });
    }
    return res(JSON.stringify(games), { status: 200 });
};
