import { fileURLToPath, URL } from 'node:url';

import { resolve } from 'path';
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
    build: {
        lib: {
            entry: resolve(__dirname, 'src/components/index.js'),
            name: '@ovchinnikov-lxs/o-components',
            // the proper extensions will be added
            fileName: 'o-components',
        },
        rollupOptions: {
            // make sure to externalize deps that shouldn't be bundled
            // into your library
            external: ['vue'],
            output: {
                // Provide global variables to use in the UMD build
                // for externalized deps
                globals: {
                    vue: 'Vue',
                },
            },
        },
    },
});
