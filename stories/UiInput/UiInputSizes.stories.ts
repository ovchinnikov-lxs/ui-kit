import type { Meta, StoryObj } from '@storybook/vue3';

import UiInput from '../../src/components/UiInput/UiInput.vue';

// Constants
import { COLOR_DESCRIPTION, COLOR_DICT } from '../assets/constants/colors';
import { SIZES_DICT } from '../../src/assets/utils/constants/sizes';
import { DEFAULT_TEMPLATE } from './UiInput.template';
import { SIZE_ARGS } from '../assets/constants/sizes';

const meta = {
    title: 'Example/UiInput/Sizes',
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
        ...SIZE_ARGS,
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
        size: SIZES_DICT.MEDIUM,
    },
} satisfies Meta<typeof UiInput>;

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
