import { db, Games, GamesTags, Tags, GameSpecifications } from 'astro:db';

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
            totalReviews: Math.random() * 100000 + 3500,
            badReviews: Math.random() * 3500,
        },
        {
            name: 'Halo Infinite',
            img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1240440/header.jpg?t=1665276865',
            price: 21.99,
            url: '/halo-infinite',
            offert: false,
            offertedPrice: null,
            totalReviews: Math.random() * 100000 + 3500,
            badReviews: Math.random() * 3500,
        },
        {
            name: 'Borderlands 2',
            img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/49520/header.jpg?t=1665276865',
            price: 39.99,
            url: '/borderlands-2',
            offert: false,
            offertedPrice: null,
            totalReviews: Math.random() * 100000 + 3500,
            badReviews: Math.random() * 3500,
        },
        {
            name: 'Call of Duty III',
            img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/311210/header.jpg?t=1665276865',
            price: 70.99,
            url: '/call-of-duty-iii',
            offert: true,
            offertedPrice: 49.99,
            totalReviews: Math.random() * 100000 + 3500,
            badReviews: Math.random() * 3500,
        },
        {
            name: 'The Witcher 3: Dawn of the Wild Hunt',
            img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/292030/header.jpg?t=1665276865',
            price: 49.99,
            url: '/the-witcher-3-dawn-of-the-wild-hunt',
            offert: false,
            offertedPrice: null,
            totalReviews: Math.random() * 100000 + 3500,
            badReviews: Math.random() * 3500,
        },
        {
            name: "Assassin's Creed: Valhalla",
            img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/2208920/header.jpg?t=1665276865',
            price: 59.99,
            url: '/assassins-creed-Valhalla',
            offert: false,
            offertedPrice: null,
            totalReviews: Math.random() * 100000 + 3500,
            badReviews: Math.random() * 3500,
        },
        {
            name: 'Cyberpunk 2077',
            img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/header.jpg?t=1665276865',
            price: 69.99,
            url: '/cyberpunk-2077',
            offert: false,
            offertedPrice: null,
            totalReviews: Math.random() * 100000 + 3500,
            badReviews: Math.random() * 3500,
        },
        {
            name: 'Red Dead Redemption 2',
            img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/header.jpg?t=1665276865',
            price: 79.99,
            url: '/red-dead-redemption-2',
            offert: true,
            offertedPrice: 59.99,
            totalReviews: Math.random() * 100000 + 3500,
            badReviews: Math.random() * 3500,
        },
        {
            name: 'The Elder Scrolls V: Skyrim',
            img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/489830/header.jpg?t=1665276865',
            price: 39.99,
            url: '/the-elder-scrolls-v-skyrim',
            offert: true,
            offertedPrice: 9.99,
            totalReviews: Math.random() * 100000 + 3500,
            badReviews: Math.random() * 3500,
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

    await db.insert(GameSpecifications).values([
        {
            game: 1,

            processor: 'Intel Core i5-4440',
            memory: '8 GB',
            graphics: 'NVIDIA GTX 1650',
            storage: '128 GB',
            recommended: false,
        },
        {
            game: 1,

            processor: 'Intel Core i7-7700K',
            memory: '16 GB',
            graphics: 'NVIDIA GTX 2080',
            storage: '128 GB',
            recommended: true,
        },
        {
            game: 2,

            processor: 'Intel Core i5-8400',
            memory: '8 GB',
            graphics: 'NVIDIA GTX 1060',
            storage: '512 GB',
            recommended: false,
        },
        {
            game: 2,

            processor: 'Intel Core i7-9700K',
            memory: '16 GB',
            graphics: 'NVIDIA RTX 2080',
            storage: '512 GB',
            recommended: true,
        },
        {
            game: 3,

            processor: 'AMD FX-8350',
            memory: '8 GB',
            graphics: 'NVIDIA GTX 760',
            storage: '75 GB',
            recommended: false,
        },
        {
            game: 3,

            processor: 'Intel Core i7-4770K',
            memory: '16 GB',
            graphics: 'NVIDIA GTX 1060',
            storage: '75 GB',
            recommended: true,
        },
        {
            game: 4,

            processor: 'Intel Core i5-2500K',
            memory: '6 GB',
            graphics: 'NVIDIA GeForce GTX 560',
            storage: '20 GB',
            recommended: false,
        },
        {
            game: 4,

            processor: 'Intel Core i7-3770',
            memory: '8 GB',
            graphics: 'NVIDIA GeForce GTX 660',
            storage: '20 GB',
            recommended: true,
        },
        {
            game: 5,

            processor: 'Intel Core i5-2500K',
            memory: '8 GB',
            graphics: 'NVIDIA GTX 660',
            storage: '35 GB',
            recommended: false,
        },
        {
            game: 5,

            processor: 'Intel Core i7-4770K',
            memory: '16 GB',
            graphics: 'NVIDIA GTX 770',
            storage: '35 GB',
            recommended: true,
        },
        {
            game: 6,

            processor: 'Intel Core i5-2300',
            memory: '4 GB',
            graphics: 'NVIDIA GTX 560',
            storage: '40 GB',
            recommended: false,
        },
        {
            game: 6,

            processor: 'Intel Core i7-2600K',
            memory: '8 GB',
            graphics: 'NVIDIA GTX 660',
            storage: '40 GB',
            recommended: true,
        },
        {
            game: 7,

            processor: 'Intel Core i5-3570K',
            memory: '8 GB',
            graphics: 'NVIDIA GTX 780',
            storage: '70 GB',
            recommended: false,
        },
        {
            game: 7,

            processor: 'Intel Core i7-4790',
            memory: '8 GB',
            graphics: 'NVIDIA GTX 780 Ti',
            storage: '70 GB',
            recommended: true,
        },
        {
            game: 8,

            processor: 'Intel Core i5-4570',
            memory: '8 GB',
            graphics: 'NVIDIA GTX 780',
            storage: '150 GB',
            recommended: false,
        },
        {
            game: 8,

            processor: 'Intel Core i7-4770K',
            memory: '16 GB',
            graphics: 'NVIDIA GTX 1060',
            storage: '150 GB',
            recommended: true,
        },
        {
            game: 9,

            processor: 'Intel Core i5-6600K',
            memory: '8 GB',
            graphics: 'NVIDIA GTX 1060',
            storage: '100 GB',
            recommended: false,
        },
        {
            game: 9,

            processor: 'Intel Core i7-8700K',
            memory: '16 GB',
            graphics: 'NVIDIA GTX 1080 Ti',
            storage: '100 GB',
            recommended: true,
        },
    ]);
}
