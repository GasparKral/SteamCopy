import type { Specifications } from '@/types/Specifications';
import type { ColumnType } from '@astrojs/db/types';

import { defineDb, defineTable, column, sql } from 'astro:db';

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
        offert: column.boolean({ default: false }),
        offertedPrice: column.number({ optional: true }),
        totalReviews: column.number({ default: 0 }),
        badReviews: column.number({ default: 0 }),
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
        name: column.text({ unique: true }),
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

const GameSpecifications = defineTable({
    columns: {
        id: column.number({ primaryKey: true }),
        game: column.number({ references: () => Games.columns.id }),
        processor: column.text({}),
        memory: column.text({}),
        graphics: column.text({}),
        storage: column.text({}),
        recommended: column.boolean({ default: false }),
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
        GameSpecifications,
    },
});
