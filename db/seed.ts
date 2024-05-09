import { db, Games, GamesTags, Tags } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
    await db.insert(Games).values([
        {
            name: 'Counter-Strike: Global Offensive 2',
            img: 'https://steamcdn-a.akamaihd.net/steam/apps/730/header.jpg?t=1662208347',
            price: 0,
            url: '/couter-strike-global-offensive',
            offert: false,
            offertedPrice: null,
            totalReviews: Math.random() * 100000,
            badReviews: Math.random() * 7500,
        },
        {
            name: 'Halo Infinite',
            img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1240440/header.jpg?t=1665276865',
            price: 21.99,
            url: '/halo-infinite',
            offert: false,
            offertedPrice: null,
            totalReviews: Math.random() * 100000,
            badReviews: Math.random() * 7500,
        },
        {
            name: 'Borderlands 2',
            img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/49520/header.jpg?t=1665276865',
            price: 39.99,
            url: '/borderlands-2',
            offert: false,
            offertedPrice: null,
            totalReviews: Math.random() * 100000,
            badReviews: Math.random() * 7500,
        },
        {
            name: 'Call of Duty III',
            img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/311210/header.jpg?t=1665276865',
            price: 70.99,
            url: '/call-of-duty-iii',
            offert: true,
            offertedPrice: 49.99,
            totalReviews: Math.random() * 100000,
            badReviews: Math.random() * 7500,
        },
        {
            name: 'The Witcher 3: Dawn of the Wild Hunt',
            img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/292030/header.jpg?t=1665276865',
            price: 49.99,
            url: '/the-witcher-3-dawn-of-the-wild-hunt',
            offert: false,
            offertedPrice: null,
            totalReviews: Math.random() * 100000,
            badReviews: Math.random() * 7500,
        },
        {
            name: "Assassin's Creed: Valhalla",
            img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/2208920/header.jpg?t=1665276865',
            price: 59.99,
            url: '/assassins-creed-Valhalla',
            offert: false,
            offertedPrice: null,
            totalReviews: Math.random() * 100000,
            badReviews: Math.random() * 7500,
        },
        {
            name: 'Cyberpunk 2077',
            img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/header.jpg?t=1665276865',
            price: 69.99,
            url: '/cyberpunk-2077',
            offert: false,
            offertedPrice: null,
            totalReviews: Math.random() * 100000,
            badReviews: Math.random() * 7500,
        },
        {
            name: 'Red Dead Redemption 2',
            img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/header.jpg?t=1665276865',
            price: 79.99,
            url: '/red-dead-redemption-2',
            offert: true,
            offertedPrice: 59.99,
            totalReviews: Math.random() * 100000,
            badReviews: Math.random() * 7500,
        },
        {
            name: 'The Elder Scrolls V: Skyrim',
            img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/489830/header.jpg?t=1665276865',
            price: 39.99,
            url: '/the-elder-scrolls-v-skyrim',
            offert: true,
            offertedPrice: 9.99,
            totalReviews: Math.random() * 100000,
            badReviews: Math.random() * 7500,
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
        {
            name: 'Action',
        },
        {
            name: 'Adventure',
        },
        {
            name: 'Survival',
        },
    ]);
    await db.insert(GamesTags).values([
        {
            game: 9,
            tag: 4,
        },
        {
            game: 9,
            tag: 3,
        },
        {
            game: 9,
            tag: 6,
        },
        {
            game: 7,
            tag: 1,
        },
        {
            game: 7,
            tag: 2,
        },
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
