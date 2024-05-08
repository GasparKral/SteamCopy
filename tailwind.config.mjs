/** @type {import('tailwindcss').Config} */
const { nextui } = require('@nextui-org/react');
export default {
    content: [
        './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
        './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            boxShadow: {
                right: '17px 0px 5px -3px #171D25AA;',
            },
            colors: {
                'primary-blue': '#1B2838',
                'light-primary-blue': '#213C57',
                'dark-primary-blue': '#171D25',
                'accent-blue': '#1A9FDC',
                'gray-blue': '#323E4C',
                'desaturated-green': '#4C6B22',
                'saturated-green': '#BEEE11',
            },
            dropShadow: {
                'blue-accent': '0 0px 3px #1A9FDC90',
            },
        },
    },
    darkMode: 'class',
    plugins: [nextui()],
};
