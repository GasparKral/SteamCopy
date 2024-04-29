import { defineDb, defineTable, column } from 'astro:db';

const Users = defineTable({
    columns: {
        id: column.number({ primaryKey: true }),
        userName: column.text({ unique: true }),
        email: column.text({}),
        password: column.text({}),
        avatar: column.text({}),
        wallet: column.number({}),
    },
});

// https://astro.build/db/config
export default defineDb({
    tables: {
        Users,
    },
});
