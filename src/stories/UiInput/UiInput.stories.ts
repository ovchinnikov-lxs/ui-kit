import type { Meta, StoryObj } from '@storybook/vue3';

import UiInput from '~/components/UiInput/UiInput.vue';

// Constants
import { SIZE_ARGS } from '~/stories/assets/constants/sizes';
import { COLOR_ARGS, COLOR_DICT } from '~/stories/assets/constants/colors';
import { SIZES_DICT } from '~/assets/utils/constants/sizes';
import { STATE_ARGS } from '~/stories/assets/constants/states';
import { STYLES_ARGS } from '~/stories/assets/constants/styles';
import { DEFAULT_TEMPLATE } from '~/stories/UiInput/UiInput.template';

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
        ...STATE_ARGS,
        ...STYLES_ARGS,
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

export const Docs: Story = {};
