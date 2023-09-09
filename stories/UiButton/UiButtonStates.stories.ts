import type { Meta, StoryObj } from '@storybook/vue3';

import UiButton from '../../src/components/UiButton/UiButton.vue';

// Constants
import { SIZES_DICT } from '../../src/assets/utils/constants/sizes';
import { COLOR_DICT } from '../assets/constants/colors';
import { STATE_ARGS, STATES_DESCRIPTION } from '../assets/constants/states';
import { DEFAULT_TEMPLATE } from './UiButton.template';

const meta = {
    title: 'Example/UiButton/States',
    component: UiButton,
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
        components: { UiButton },
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
} satisfies Meta<typeof UiButton>;

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
