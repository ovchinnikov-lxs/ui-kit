import type { Meta, StoryObj } from '@storybook/vue3';

import UiLink from '~/components/UiLink/UiLink.vue';

// Constants
import { SIZE_ARGS, SIZE_DESCRIPTION } from '~/stories/assets/constants/sizes';
import { SIZES_DICT } from '~/assets/utils/constants/sizes';
import { COLOR_DICT } from '~/stories/assets/constants/colors';
import { DEFAULT_TEMPLATE } from '~/stories/UiLink/UiLink.template';

const meta = {
    title: 'Example/UiLink/Sizes',
    component: UiLink,
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
        components: { UiLink },
        setup() {
            return { args };
        },
        template: DEFAULT_TEMPLATE,
    }),
    args: {
        color: COLOR_DICT.PRIMARY,
    },
} satisfies Meta<typeof UiLink>;

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
