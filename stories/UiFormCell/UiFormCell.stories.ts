import type { Meta, StoryObj } from '@storybook/vue3';

import UiFormCell from '../../src/components/UiFormCell/UiFormCell.vue';

// Constants
import { SIZE_ARGS } from '../assets/constants/sizes';
import { COLOR_ARGS, COLOR_DICT } from '../assets/constants/colors';
import { SIZES_DICT } from '../../src/assets/utils/constants/sizes';
import { ERROR_ARGS, REQUIRED_ARGS } from '../assets/constants/states';
import { DEFAULT_TEMPLATE } from './UiFormCell.template';

const meta = {
    title: 'Example/UiFormCell',
    component: UiFormCell,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: 'Component as wrap for some input fields',
            },
        },
    },
    argTypes: {
        ...SIZE_ARGS,
        ...COLOR_ARGS,
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
        size: SIZES_DICT.MEDIUM,
        color: COLOR_DICT.PRIMARY,
    },
} satisfies Meta<typeof UiFormCell>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
