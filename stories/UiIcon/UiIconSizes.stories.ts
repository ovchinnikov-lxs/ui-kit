import type { Meta, StoryObj } from '@storybook/vue3';

import UiIcon from '../../src/components/UiIcon/UiIcon.vue';

// Constants
import { SIZE_ARGS, SIZE_DESCRIPTION } from '../assets/constants/sizes';
import { SIZES_DICT } from '../../src/assets/utils/constants/sizes';

const meta = {
    title: 'Example/UiIcon/Sizes',
    component: UiIcon,
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
        components: { UiIcon },
        setup() {
            return { args };
        },
        template: '<UiIcon v-bind="args"/>',
    }),
} satisfies Meta<typeof UiIcon>;

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
