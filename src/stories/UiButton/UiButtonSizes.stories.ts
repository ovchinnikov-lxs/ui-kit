import type { Meta, StoryObj } from '@storybook/vue3';

import UiButton from '~/components/UiButton/UiButton.vue';

// Constants
import { SIZE_ARGS, SIZE_DESCRIPTION } from '~/stories/assets/constants/sizes';
import { SIZES_DICT } from '~/assets/utils/constants/sizes';
import { COLOR_DICT } from '~/stories/assets/constants/colors';
import { DEFAULT_TEMPLATE } from '~/stories/UiButton/UiButton.template';

const meta = {
    title: 'Example/UiButton/Sizes',
    component: UiButton,
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
        components: { UiButton },
        setup() {
            return { args };
        },
        template: DEFAULT_TEMPLATE,
    }),
    args: {
        color: COLOR_DICT.PRIMARY,
    },
} satisfies Meta<typeof UiButton>;

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
