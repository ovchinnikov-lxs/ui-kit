import type { Meta, StoryObj } from '@storybook/vue3';

import UiPlate from '../../src/components/UiPlate/UiPlate.vue';

// Constants
import { SIZE_ARGS } from '../assets/constants/sizes';
import { COLOR_ARGS, COLOR_DICT } from '../assets/constants/colors';
import { SIZES_DICT } from '../../src/assets/utils/constants/sizes';
import { ROUNDED_ARGS } from '../assets/constants/styles';
import { DEFAULT_TEMPLATE } from './UiPlate.template';
import { ACTIVE_ARGS, DISABLED_ARGS } from '../assets/constants/states';

const meta = {
    title: 'Example/UiPlate/Default',
    component: UiPlate,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: 'Interactive component for display some plates',
            },
        },
    },
    argTypes: {
        ...SIZE_ARGS,
        ...COLOR_ARGS,
        ...ACTIVE_ARGS,
        ...DISABLED_ARGS,
        ...ROUNDED_ARGS,
    },
    render: args => ({
        components: { UiPlate },
        setup() {
            return { args };
        },
        template: DEFAULT_TEMPLATE,
    }),
    args: {
        size: SIZES_DICT.MEDIUM,
        color: COLOR_DICT.PRIMARY,
    },
} satisfies Meta<typeof UiPlate>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
