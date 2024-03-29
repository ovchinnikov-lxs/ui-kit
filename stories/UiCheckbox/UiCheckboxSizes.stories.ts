import type { Meta, StoryObj } from '@storybook/vue3';

import UiCheckbox from '../../src/components/UiCheckbox/UiCheckbox.vue';

// Constants
import { SIZE_ARGS, SIZE_DESCRIPTION } from '../assets/constants/sizes';
import { SIZES_DICT } from '../../src/assets/utils/constants/sizes';
import { COLOR_DICT } from '../assets/constants/colors';
import { DEFAULT_TEMPLATE } from './UiCheckbox.template';

const meta = {
    title: 'Example/UiCheckbox/Sizes',
    component: UiCheckbox,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: SIZE_DESCRIPTION,
            },
        },
    },
    argTypes: {
        ...SIZE_ARGS,
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
    },
} satisfies Meta<typeof UiCheckbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Medium: Story = {
    args: {
        size: SIZES_DICT.MEDIUM,
    },
};

export const Large: Story = {
    args: {
        size: SIZES_DICT.LARGE,
    },
};
