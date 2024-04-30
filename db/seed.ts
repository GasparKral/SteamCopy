import { db, Users } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
    await db.insert(Users).values([
        {
            userName: 'admin',
            email: 'admin@test.com',
            password:
                '8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918',
            avatar: 'steampowered-tile.svg',
            wallet: 0,
        },
    ]);
}
