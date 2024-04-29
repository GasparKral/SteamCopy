import { defineDb, defineTable, column } from 'astro:db';

const users = defineTable({
    columns: {
        id: column.number({ primaryKey: true }),
        username: column.text({ unique: true }),
        avatar: column.text({ optional: true }),
        email: column.text({}),
        password: column.text({}),
        wallet: column.number({}),
    },
    indexes: [
        {
            on: ['id'],
            unique: true,
        },
    ],
});

const games = defineTable({
    columns: {
        id: column.number({ primaryKey: true }),
        name: column.text({}),
        img: column.text({}),
        price: column.number({}),
        tags: column.text({}),
        url: column.text({}),
    },
    indexes: [
        {
            on: ['id'],
            unique: true,
        },
    ],
});

const carts = defineTable({
    columns: {
        id: column.text({ primaryKey: true }),
        user: column.number({ references: () => users.columns.id }),
        game: column.number({ references: () => games.columns.id }),
    },
    indexes: [
        {
            on: ['id'],
            unique: true,
        },
    ],
});

const whisList = defineTable({
    columns: {
        id: column.text({ primaryKey: true }),
        user: column.number({ references: () => users.columns.id }),
        game: column.number({ references: () => games.columns.id }),
    },
    indexes: [
        {
            on: ['id'],
            unique: true,
        },
    ],
});

// https://astro.build/db/config
export default defineDb({
    tables: {
        users,
        games,
        carts,
        whisList,
    },
});
