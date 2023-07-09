import type { Meta, StoryObj } from '@storybook/vue3';

import UiButton from '~/components/UiButton/UiButton.vue';

// Constants
import { SIZE_ARGS } from '~/stories/assets/constants/sizes';
import { COLOR_ARGS, COLOR_DICT } from '~/stories/assets/constants/colors';
import { SIZES_DICT } from '~/assets/utils/constants/sizes';
import { STATE_ARGS } from '~/stories/assets/constants/states';
import { STYLES_ARGS } from '~/stories/assets/constants/styles';
import { DEFAULT_TEMPLATE } from '~/stories/UiButton/UiButton.template';

const meta = {
    title: 'Example/UiButton',
    component: UiButton,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: 'Interactive component for display some buttons',
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
        components: { UiButton },
        setup() {
            return { args };
        },
        template: DEFAULT_TEMPLATE,
    }),
    args: {
        size: SIZES_DICT.MEDIUM,
        color: COLOR_DICT.PRIMARY,
    },
} satisfies Meta<typeof UiButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
};
