import type { Meta, StoryObj } from '@storybook/vue3';

import UiInput from '../../src/components/UiInput/UiInput.vue';

// Constants
import { SIZE_ARGS } from '../assets/constants/sizes';
import { COLOR_ARGS, COLOR_DICT } from '../assets/constants/colors';
import { SIZES_DICT } from '../../src/assets/utils/constants/sizes';
import { DISABLED_ARGS, ERROR_ARGS } from '../assets/constants/states';
import { DEFAULT_TEMPLATE } from './UiInput.template';

const meta = {
    title: 'Example/UiInput',
    component: UiInput,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: 'Input fields',
            },
        },
    },
    argTypes: {
        ...SIZE_ARGS,
        ...COLOR_ARGS,
        ...DISABLED_ARGS,
        ...ERROR_ARGS,
    },
    render: args => ({
        components: { UiInput },
        setup() {
            return { args };
        },
        template: DEFAULT_TEMPLATE,
    }),
    args: {
        size: SIZES_DICT.MEDIUM,
        color: COLOR_DICT.PRIMARY,
    },
} satisfies Meta<typeof UiInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
