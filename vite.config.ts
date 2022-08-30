import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';

import vue from '@vitejs/plugin-vue';
import checker from 'vite-plugin-checker';
import stylelintPlugin from 'vite-plugin-stylelint';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        checker({
            typescript: true,
            vueTsc: true,
            eslint: {
                lintCommand: 'eslint .eslintrc.cjs',
            },
        }),
        stylelintPlugin(),
    ],
    resolve: {
        alias: {
            '~': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
});
