import type { Meta, StoryObj } from '@storybook/vue3';

import UiLink from '../../src/components/UiLink/UiLink.vue';

// Constants
import { SIZES_DICT } from '../../src/assets/utils/constants/sizes';
import { COLOR_DICT } from '../assets/constants/colors';
import { STATE_ARGS, STATES_DESCRIPTION } from '../assets/constants/states';
import { DEFAULT_TEMPLATE } from './UiLink.template';

const meta = {
    title: 'Example/UiLink/States',
    component: UiLink,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: STATES_DESCRIPTION,
            },
        },
    },
    argTypes: {
        ...STATE_ARGS,
    },
    render: args => ({
        components: { UiLink },
        setup() {
            return { args };
        },
        template: DEFAULT_TEMPLATE,
    }),
    args: {
        active: false,
        color: COLOR_DICT.PRIMARY,
        size: SIZES_DICT.MEDIUM,
    },
} satisfies Meta<typeof UiLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        active: false,
    },
};

export const Active: Story = {
    args: {
        active: true,
    },
};

export const Interesting: Story = {
    args: {
        interesting: true,
    },
};

export const Disabled: Story = {
    args: {
        disabled: true,
    },
};
