import { db, Users, Games } from 'astro:db';
import { createHash } from 'node:crypto';

// https://astro.build/db/seed
export default async function seed() {
    await db.insert(Users).values([
        {
            userName: 'admin',
            email: 'admin@test.com',
            password: createHash('sha256').update('admin').digest('hex'),
            avatar: 'steampowered-tile.svg',
            wallet: 0,
        },
    ]);

    await db.insert(Games).values([
        {
            name: 'Counter-Strike: Global Offensive',
            img: 'https://steamcdn-a.akamaihd.net/steam/apps/730/header.jpg?t=1662208347',
            price: 30.99,
            url: '/couter-strike-global-offensive',
        },
        {
            name: 'Halo Infinite',
            img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1240440/header.jpg?t=1665276865',
            price: 21.99,
            url: '/halo-infinite',
        },
        {
            name: 'Borderlands 2',
            img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/49520/header.jpg?t=1665276865',
            price: 39.99,
            url: '/borderlands-2',
        },
        {
            name: 'Call-of-Duty-III',
            img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/311210/header.jpg?t=1665276865',
            price: 70.99,
            url: '/call-of-duty-iii',
        },
    ]);
}
