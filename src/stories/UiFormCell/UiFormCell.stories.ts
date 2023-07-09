import type { Meta, StoryObj } from '@storybook/vue3';

import UiFormCell from '~/components/UiFormCell/UiFormCell.vue';

// Constants
import { SIZE_ARGS } from '~/stories/assets/constants/sizes';
import { COLOR_ARGS, COLOR_DICT } from '~/stories/assets/constants/colors';
import { SIZES_DICT } from '~/assets/utils/constants/sizes';
import { ERROR_ARGS, REQUIRED_ARGS } from '~/stories/assets/constants/states';
import { STYLES_ARGS } from '~/stories/assets/constants/styles';
import { DEFAULT_TEMPLATE } from '~/stories/UiFormCell/UiFormCell.template';

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
        ...STYLES_ARGS,
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

export const Playground: Story = {};
