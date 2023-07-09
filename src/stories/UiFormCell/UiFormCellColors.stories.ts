import type { Meta, StoryObj } from '@storybook/vue3';

import UiFormCell from '~/components/UiFormCell/UiFormCell.vue';

// Constants
import { COLOR_ARGS, COLOR_DESCRIPTION, COLOR_DICT } from '~/stories/assets/constants/colors';
import { DEFAULT_TEMPLATE } from '~/stories/UiFormCell/UiFormCell.template';

const meta = {
    title: 'Example/UiFormCell/Colors',
    component: UiFormCell,
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
        components: { UiFormCell },
        setup() {
            return { args };
        },
        template: DEFAULT_TEMPLATE,
    }),
    args: {
        color: COLOR_DICT.PRIMARY,
    },
} satisfies Meta<typeof UiFormCell>;

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
