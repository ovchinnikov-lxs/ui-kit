import type { Meta, StoryObj } from '@storybook/vue3';

import UiInput from '~/components/UiInput/UiInput.vue';

// Constants
import { COLOR_ARGS, COLOR_DESCRIPTION, COLOR_DICT } from '~/stories/assets/constants/colors';
import { DEFAULT_TEMPLATE } from '~/stories/UiInput/UiInput.template';

const meta = {
    title: 'Example/UiInput/Colors',
    component: UiInput,
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
