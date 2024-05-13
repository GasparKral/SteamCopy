import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import db from '@astrojs/db';
import auth from 'auth-astro';
import netlify from '@astrojs/netlify';

export default defineConfig({
    integrations: [tailwind(), react(), db(), auth()],
    prefetch: true,
    redirects: {
        '/': '/tienda',
    },
    site: 'https://steamui.netlify.app',
    adapter: netlify({
        cacheOnDemandPages: true,
    }),
    output: 'server',
    vite: {
        ssr: {
            external: ['react', 'react-dom'],
        },
    },
});
