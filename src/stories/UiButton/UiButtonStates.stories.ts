import type { Meta, StoryObj } from '@storybook/vue3';

import UiButton from '~/components/UiButton/UiButton.vue';

// Constants
import { SIZES_DICT } from '~/assets/utils/constants/sizes';
import { COLOR_DICT } from '~/stories/assets/constants/colors';
import { STATE_ARGS, STATES_DESCRIPTION } from '~/stories/assets/constants/states';

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
        template: '<UiButton v-bind="args">Button</UiButton>',
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
