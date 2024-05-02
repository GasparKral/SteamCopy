import type { APIRoute } from 'astro';
import { db, Users, eq } from 'astro:db';

interface user {
    dir: string;
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
    const { dir } = (await request.json()) as user;
    const user = await db.select().from(Users).where(eq(Users.userName, dir));

    if (user.length === 0) {
        return res('user not found', { status: 404 });
    }

    return res(JSON.stringify(user[0]), { status: 200 });
};
