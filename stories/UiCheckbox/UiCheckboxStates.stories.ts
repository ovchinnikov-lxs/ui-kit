import type { Meta, StoryObj } from '@storybook/vue3';

import UiCheckbox from '../../src/components/UiCheckbox/UiCheckbox.vue';

// Constants
import { SIZES_DICT } from '../../src/assets/utils/constants/sizes';
import { COLOR_DICT } from '../assets/constants/colors';
import { DISABLED_ARGS, STATES_DESCRIPTION } from '../assets/constants/states';
import { DEFAULT_TEMPLATE } from './UiCheckbox.template';

const meta = {
    title: 'Example/UiCheckbox/States',
    component: UiCheckbox,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: STATES_DESCRIPTION,
            },
        },
    },
    argTypes: {
        ...DISABLED_ARGS,
    },
    render: args => ({
        components: { UiCheckbox },
        setup() {
            return { args };
        },
        template: DEFAULT_TEMPLATE,
    }),
    args: {
        color: COLOR_DICT.PRIMARY,
        size: SIZES_DICT.MEDIUM,
    },
} satisfies Meta<typeof UiCheckbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Disabled: Story = {
    args: {
        disabled: true,
    },
};
