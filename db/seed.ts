import { db, Users, Games, GamesTags, Tags } from 'astro:db';
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
            name: 'Counter-Strike: Global Offensive 2',
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
        {
            name: 'The Witcher 4: Dawn of the Wild Hunt',
            img: 'https://cdn.example.com/games/witcher4.jpg',
            price: 49.99,
            url: '/the-witcher-4',
        },
        {
            name: "Assassin's Creed: Ragnarok",
            img: 'https://cdn.example.com/games/assassinscreed-ragnarok.jpg',
            price: 59.99,
            url: '/assassins-creed-ragnarok',
        },
        {
            name: 'Cyberpunk 2078',
            img: 'https://cdn.example.com/games/cyberpunk2078.jpg',
            price: 69.99,
            url: '/cyberpunk-2078',
        },
        {
            name: 'Red Dead Redemption 3',
            img: 'https://cdn.example.com/games/reddeadredemption3.jpg',
            price: 79.99,
            url: '/red-dead-redemption-3',
        },
    ]);
    await db.insert(Tags).values([
        {
            name: 'First-Person',
        },
        {
            name: 'Shooter',
        },
        {
            name: 'RPG',
        },
        {
            name: 'Open World',
        },
    ]);
    await db.insert(GamesTags).values([
        {
            game: 1,
            tag: 1,
        },
        {
            game: 1,
            tag: 2,
        },
        {
            game: 2,
            tag: 1,
        },
        {
            game: 2,
            tag: 2,
        },
        {
            game: 3,
            tag: 1,
        },
        {
            game: 3,
            tag: 2,
        },
        {
            game: 4,
            tag: 1,
        },
        {
            game: 4,
            tag: 2,
        },
        {
            game: 5,
            tag: 3,
        },
        {
            game: 5,
            tag: 4,
        },
        {
            game: 6,
            tag: 3,
        },
        {
            game: 6,
            tag: 4,
        },
        {
            game: 7,
            tag: 3,
        },
        {
            game: 7,
            tag: 4,
        },
        {
            game: 8,
            tag: 3,
        },
        {
            game: 8,
            tag: 4,
        },
    ]);
}
