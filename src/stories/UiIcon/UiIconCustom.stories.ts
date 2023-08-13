import type { Meta, StoryObj } from '@storybook/vue3';

import UiIcon from '~/components/UiIcon/UiIcon.vue';

// Constants
import { SIZE_ARGS } from '~/stories/assets/constants/sizes';

const meta = {
    title: 'Example/UiIcon/CustomSvg',
    component: UiIcon,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: 'with slot - sprite component',
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
        template: `
            <UiIcon v-bind="args">
                <template #sprite-component="props">
                    <svg :viewBox="props.viewBox">
                        <path
                            d="M13.75 20.8615L26.389 8.22112L28.3346 10.1654L13.75 24.75L4.9995 15.9995L6.94375 14.0552L13.75 20.8615Z"
                        />
                    </svg>
                </template>
            </UiIcon>
        `,
    }),
} satisfies Meta<typeof UiIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
