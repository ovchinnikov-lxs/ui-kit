import type { Meta, StoryObj } from '@storybook/vue3';

import UiIcon from '~/components/UiIcon/UiIcon.vue';

// Constants
import { SIZE_ARGS } from '~/stories/assets/constants/sizes';
import { SIZES_DICT } from '~/assets/utils/constants/sizes';

const meta = {
    title: 'Example/UiIcon',
    component: UiIcon,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: 'Wrapper for svg icons',
            },
        },
    },
    argTypes: {
        ...SIZE_ARGS,
    },
    render: args => ({
        components: { UiIcon },
        setup() {
            return { args };
        },
        template: '<UiIcon v-bind="args"/>',
    }),
    args: {
        size: SIZES_DICT.MEDIUM,
    },
} satisfies Meta<typeof UiIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
