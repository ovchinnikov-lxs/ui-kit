import type { Meta, StoryObj } from '@storybook/vue3';

import UiFormCell from '~/components/UiFormCell/UiFormCell.vue';

// Constants
import { SIZES_DICT } from '~/assets/utils/constants/sizes';
import { COLOR_DICT } from '~/stories/assets/constants/colors';
import { ERROR_ARGS, REQUIRED_ARGS, STATES_DESCRIPTION } from '~/stories/assets/constants/states';
import { DEFAULT_TEMPLATE } from '~/stories/UiFormCell/UiFormCell.template';

const meta = {
    title: 'Example/UiFormCell/States',
    component: UiFormCell,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: STATES_DESCRIPTION,
            },
        },
    },
    argTypes: {
        ...REQUIRED_ARGS,
        ...ERROR_ARGS,
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
        size: SIZES_DICT.MEDIUM,
    },
} satisfies Meta<typeof UiFormCell>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Required: Story = {
    args: {
        required: true,
    },
};

export const Error: Story = {
    args: {
        error: 'This Name not unique',
    },
};
