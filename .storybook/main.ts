import type {StorybookConfig} from '@storybook/vue3-vite';

const config: StorybookConfig = {
    stories: [
        '../**/*.mdx',
        '../**/*.stories.@(js|jsx|ts|tsx)',
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        '@storybook/addon-mdx-gfm'
    ],
    framework: {
        name: '@storybook/vue3-vite',
        options: {},
    },
    docs: {
        autodocs: 'tag',
        defaultName: 'Default',
    },
};
export default config;
