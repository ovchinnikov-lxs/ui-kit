import type { Meta, StoryObj } from '@storybook/vue3';

import UiCollapse from '../../src/components/UiCollapse/UiCollapse.vue';

// Constants
import { DEFAULT_TEMPLATE } from './UiCollapse.template';

const meta = {
    title: 'Example/UiCollapse/Default',
    component: UiCollapse,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: 'Collapse component for hidden contents',
            },
        },
    },
    render: args => ({
        components: { UiCollapse },
        setup() {
            return { args };
        },
        template: DEFAULT_TEMPLATE,
    }),
} satisfies Meta<typeof UiCollapse>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
