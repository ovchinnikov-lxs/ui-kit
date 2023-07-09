import type { Meta, StoryObj } from '@storybook/vue3';

import UiCollapse from '~/components/UiCollapse/UiCollapse.vue';

// Constants
import { DEFAULT_TEMPLATE } from '~/stories/UiCollapse/UiCollapse.template';

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

export const Playground: Story = {};
