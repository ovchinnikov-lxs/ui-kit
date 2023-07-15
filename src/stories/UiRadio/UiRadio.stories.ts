import type { Meta, StoryObj } from '@storybook/vue3';

import UiRadio from '~/components/UiRadio/UiRadio.vue';

// Constants
import { SIZE_ARGS } from '~/stories/assets/constants/sizes';
import { SIZES_DICT } from '~/assets/utils/constants/sizes';
import { DEFAULT_TEMPLATE } from '~/stories/UiRadio/UiRadio.template';
import { COLOR_ARGS, COLOR_DICT } from '~/stories/assets/constants/colors';

const meta = {
    title: 'Example/UiRadio/Default',
    component: UiRadio,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: 'Radio button component',
            },
        },
    },
    argTypes: {
        ...COLOR_ARGS,
        ...SIZE_ARGS,
    },
    render: args => ({
        components: { UiRadio },
        setup() {
            return { args };
        },
        template: DEFAULT_TEMPLATE,
    }),
    args: {
        color: COLOR_DICT.PRIMARY,
        size: SIZES_DICT.MEDIUM,
    },
} satisfies Meta<typeof UiRadio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
};
