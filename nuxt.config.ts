// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const currentDir = dirname(fileURLToPath(import.meta.url));

export default defineNuxtConfig({
    devtools: { enabled: true },

    alias: {
        'ui-layer': fileURLToPath(new URL('./', import.meta.url)),
    },

    typescript: {
        tsConfig: {
            include: [
                'node',
                join(currentDir, './types/**/*.ts'),
            ],
            compilerOptions: {
                types: ['vitest/globals'],
            },
        },
    },

    imports: {
        dirs: [
            'utils/**',
            'composables/**',
        ],
    },

    modules: [
        '@nuxtjs/svg-sprite',
        '@nuxt/image',
        '@vueuse/nuxt',
        '@nuxt/test-utils/module',
    ],

    experimental: {
        asyncContext: true,
    },

    features: {
        inlineStyles: false,
    },

    css: [
        join(currentDir, './assets/styles/_bundle.scss'),
    ],

    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `@use "${join(currentDir, './assets/styles/_common.scss')}" as *;`,
                },
            },
        },

        esbuild: {
            drop: ['debugger'],
            pure: ['console.log', 'console.debug', 'console.trace'],
        },
    },
});
