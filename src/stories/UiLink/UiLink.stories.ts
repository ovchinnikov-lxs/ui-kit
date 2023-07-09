import type { Meta, StoryObj } from '@storybook/vue3';

import UiLink from '~/components/UiLink/UiLink.vue';

// Constants
import { SIZE_ARGS } from '~/stories/assets/constants/sizes';
import { COLOR_ARGS, COLOR_DICT } from '~/stories/assets/constants/colors';
import { SIZES_DICT } from '~/assets/utils/constants/sizes';
import { STATE_ARGS } from '~/stories/assets/constants/states';
import { DEFAULT_TEMPLATE } from '~/stories/UiLink/UiLink.template';

const meta = {
    title: 'Example/UiLink',
    component: UiLink,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: 'Interactive component for display some links',
            },
        },
    },
    argTypes: {
        ...SIZE_ARGS,
        ...COLOR_ARGS,
        ...STATE_ARGS,
    },
    render: args => ({
        components: { UiLink },
        setup() {
            return { args };
        },
        template: DEFAULT_TEMPLATE,
    }),
    args: {
        size: SIZES_DICT.MEDIUM,
        color: COLOR_DICT.PRIMARY,
    },
} satisfies Meta<typeof UiLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
