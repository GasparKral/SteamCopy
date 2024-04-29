import { defineDb, defineTable, column } from 'astro:db';

const Users = defineTable({
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

const Games = defineTable({
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

const Carts = defineTable({
    columns: {
        id: column.text({ primaryKey: true }),
        user: column.number({ references: () => Users.columns.id }),
        game: column.number({ references: () => Games.columns.id }),
    },
    indexes: [
        {
            on: ['id'],
            unique: true,
        },
    ],
});

const WhisList = defineTable({
    columns: {
        id: column.text({ primaryKey: true }),
        user: column.number({ references: () => Users.columns.id }),
        game: column.number({ references: () => Games.columns.id }),
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
        Users,
        Games,
        Carts,
        WhisList,
    },
});
