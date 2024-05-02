import type { APIRoute } from 'astro';
import { db, Users, sql } from 'astro:db';
import { createHash } from 'node:crypto';

interface user {
    dir: string;
    password: string;
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
    const { dir, password } = (await request.json()) as user;
    const user = await db
        .select()
        .from(Users)
        .where(
            sql`(${Users.email} = ${dir}) OR (${
                Users.userName
            } = ${dir}) AND (${Users.password} = ${createHash('sha256')
                .update(password)
                .digest('hex')})`
        );

    if (user.length === 0) {
        return res('user not found', { status: 404 });
    }

    return res(JSON.stringify(user[0]), { status: 200 });
};
