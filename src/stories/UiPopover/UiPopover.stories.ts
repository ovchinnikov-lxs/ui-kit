import type { Meta, StoryObj } from '@storybook/vue3';

import UiPopover from '~/components/UiPopover/UiPopover.vue';

// Constants
import { DEFAULT_TEMPLATE } from '~/stories/UiPopover/UiPopover.template';

const meta = {
    title: 'Example/UiPopover/Default',
    component: UiPopover,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: 'Popover component',
            },
        },
    },
    render: args => ({
        components: { UiPopover },
        setup() {
            return { args };
        },
        template: DEFAULT_TEMPLATE,
    }),
} satisfies Meta<typeof UiPopover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
};
