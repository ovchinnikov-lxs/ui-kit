import type { Meta, StoryObj } from '@storybook/vue3';

import UiButton from '~/components/UiButton/UiButton.vue';

// Constants
import { SIZES_DICT } from '~/assets/utils/constants/sizes';
import { COLOR_DICT } from '~/stories/assets/constants/colors';
import { STYLES_ARGS, STYLES_DESCRIPTION } from '~/stories/assets/constants/styles';
import { DEFAULT_TEMPLATE, ICONIC_TEMPLATE } from '~/stories/UiButton/UiButton.template';

const meta = {
    title: 'Example/UiButton/Styles',
    component: UiButton,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: STYLES_DESCRIPTION,
            },
        },
    },
    argTypes: {
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
        color: COLOR_DICT.PRIMARY,
        size: SIZES_DICT.MEDIUM,
    },
} satisfies Meta<typeof UiButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Outline: Story = {
    args: { outline: true },
};
export const Rounded: Story = {
    args: { rounded: true },
};
export const Icon: Story = {
    args: { icon: true },
    render: args => ({
        components: { UiButton },
        setup() {
            return { args };
        },
        template: ICONIC_TEMPLATE,
    }),
};
