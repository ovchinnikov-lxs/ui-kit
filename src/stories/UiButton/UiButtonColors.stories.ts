import type { Meta, StoryObj } from '@storybook/vue3';

import UiButton from '~/components/UiButton/UiButton.vue';

// Constants
import { COLOR_ARGS, COLOR_DESCRIPTION, COLOR_DICT } from '~/stories/assets/constants/colors';

const meta = {
    title: 'Example/UiButton/Colors',
    component: UiButton,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: COLOR_DESCRIPTION,
            },
        },
    },
    argTypes: {
        ...COLOR_ARGS,
    },
    render: args => ({
        components: { UiButton },
        setup() {
            return { args };
        },
        template: '<UiButton v-bind="args">Button</UiButton>',
    }),
    args: {
        color: COLOR_DICT.PRIMARY,
    },
} satisfies Meta<typeof UiButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        color: COLOR_DICT.PRIMARY,
    },
};

export const Secondary: Story = {
    args: {
        color: COLOR_DICT.SECONDARY,
    },
};
