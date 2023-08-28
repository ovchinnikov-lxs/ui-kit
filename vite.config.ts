import { fileURLToPath, URL } from 'node:url';

import { resolve } from 'path';
import { defineConfig } from 'vitest/config';

import vue from '@vitejs/plugin-vue';
import checker from 'vite-plugin-checker';
import stylelintPlugin from 'vite-plugin-stylelint';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `
                  @import "~/assets/style/shared/_mixins.scss";
                `,
            },
        },
    },
    plugins: [
        vue(),
        dts({
            insertTypesEntry: true,
        }),
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
        cssCodeSplit: true,
        lib: {
            entry: resolve(__dirname, 'src/components/main.ts'),
            name: 'UiKit',
            formats: ['es', 'cjs', 'umd'],
            fileName: format => `ui-kit.${format}.js`,
        },
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'src/components/main.ts'),
            },
            external: ['vue'],

            output: {
                assetFileNames: (assetInfo): string => {
                    if (assetInfo.name?.includes('main.css')) {
                        return 'ui-kit.css';
                    }

                    return assetInfo?.name || '';
                },
                exports: 'named',
                globals: {
                    vue: 'Vue',
                },
            },
        },
    },

    optimizeDeps: { exclude: ['swiper/vue', 'swiper/types'] },

    test: {
        // enable jest-like global test APIs
        globals: true,
        // simulate DOM with happy-dom
        // (requires installing happy-dom as a peer dependency)
        environment: 'happy-dom',
        coverage: {
            provider: 'v8',
            enabled: true,
            all: true,
            exclude: [
                '.storybook',
                'src/stories',
                'src/components/main.ts',
                'src/components/index.ts',
                'coverage/**',
                'dist/**',
                'packages/*/test?(s)/**',
                '**/*.d.ts',
                '**/virtual:*',
                '**/__x00__*',
                '**/\x00*',
                'cypress/**',
                'test?(s)/**',
                'test?(-*).?(c|m)[jt]s?(x)',
                '**/*{.,-}{test,spec}.?(c|m)[jt]s?(x)',
                '**/__tests__/**',
                '**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build}.config.*',
                '**/vitest.{workspace,projects}.[jt]s?(on)',
                '**/.{eslint,mocha,prettier}rc.{?(c|m)js,yml}',
            ],
        },
        include: ['**/*.{test,spec}.?(c|m|vue)[jt]s?(x)'],
    },
});
