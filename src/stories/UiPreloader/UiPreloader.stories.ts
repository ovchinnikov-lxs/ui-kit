import type { Meta, StoryObj } from '@storybook/vue3';

import UiPreloader from '~/components/UiPreloader/UiPreloader.vue';

// Constants
import { SIZE_ARGS } from '~/stories/assets/constants/sizes';
import { SIZES_DICT } from '~/assets/utils/constants/sizes';
import { DEFAULT_TEMPLATE } from '~/stories/UiPreloader/UiPreloader.template';

const meta = {
    title: 'Example/UiPreloader/Default',
    component: UiPreloader,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: 'Preloader component',
            },
        },
    },
    argTypes: {
        ...SIZE_ARGS,
    },
    render: args => ({
        components: { UiPreloader },
        setup() {
            return { args };
        },
        template: DEFAULT_TEMPLATE,
    }),
    args: {
        size: SIZES_DICT.MEDIUM,
    },
} satisfies Meta<typeof UiPreloader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
};
