import { createHash } from 'node:crypto';
import type { APIRoute } from 'astro';
import { db, Users, eq } from 'astro:db';

export const prerender = true;

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

interface newUser {
    userName: string;
    email: string;
    password: string;
}

export const POST: APIRoute = async ({ request }) => {
    if (!request.body) {
        console.log(request);
        return res('bad request', { status: 400 });
    }

    const { userName, email, password } = (await request.json()) as newUser;

    if (!userName || !email || !password) {
        return res('bad request', { status: 400 });
    }

    const userExists = await db
        .select()
        .from(Users)
        .where(eq(Users.userName, userName));
    if (userExists.length > 0) {
        return res('user already exists', { status: 409 });
    }
    const user = await db.insert(Users).values({
        userName,
        email,
        password: createHash('sha256').update(password).digest('hex'),
    });

    return res(JSON.stringify(user), {
        status: 200,
        statusText: 'user created',
        headers: { 'Content-Type': 'application/json' },
    });
};
