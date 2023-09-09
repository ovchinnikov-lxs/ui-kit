import type { Meta, StoryObj } from '@storybook/vue3';

import UiInput from '../../src/components/UiInput/UiInput.vue';

// Constants
import { COLOR_DICT } from '../assets/constants/colors';
import { DEFAULT_TEMPLATE } from './UiInput.template';
import { DISABLED_ARGS, ERROR_ARGS } from '../assets/constants/states';

const meta = {
    title: 'Example/UiInput/States',
    component: UiInput,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: 'Input has two main states - disabled and error',
            },
        },
    },
    argTypes: {
        ...DISABLED_ARGS,
        ...ERROR_ARGS,
    },
    render: args => ({
        components: { UiInput },
        setup() {
            return { args };
        },
        template: DEFAULT_TEMPLATE,
    }),
    args: {
        color: COLOR_DICT.PRIMARY,
    },
} satisfies Meta<typeof UiInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        error: null,
        disabled: false,
    },
};

export const Error: Story = {
    args: {
        error: 'error',
    },
};

export const Disabled: Story = {
    args: {
        disabled: true,
    },
};
