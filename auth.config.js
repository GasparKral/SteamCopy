import { defineConfig } from 'auth-astro';
import Google from '@auth/core/providers/google';

export default defineConfig({
    providers: [
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
});
