import { defineDb, defineTable, column } from 'astro:db';

const Users = defineTable({
    columns: {
        id: column.number({ primaryKey: true }),
        userName: column.text({ unique: true }),
        avatar: column.text({
            optional: true,
            default: 'steampowered-tile.svg',
        }),
        email: column.text({}),
        password: column.text({}),
        wallet: column.number({ default: 0 }),
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
        url: column.text({}),
    },
    indexes: [
        {
            on: ['id'],
            unique: true,
        },
    ],
});

const GamesTags = defineTable({
    columns: {
        id: column.number({ primaryKey: true }),
        game: column.number({ references: () => Games.columns.id }),
        tag: column.number({ references: () => Tags.columns.id }),
    },
    indexes: [
        {
            on: ['id'],
            unique: true,
        },
    ],
});

const Tags = defineTable({
    columns: {
        id: column.number({ primaryKey: true }),
        name: column.text({}),
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
        id: column.number({ primaryKey: true }),
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
        id: column.number({ primaryKey: true }),
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
        GamesTags,
        Tags,
    },
});
