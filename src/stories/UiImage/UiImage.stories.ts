import type { Meta, StoryObj } from '@storybook/vue3';

import UiImage from '~/components/UiImage/UiImage.vue';

const meta = {
    title: 'Example/UiImage',
    component: UiImage,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: 'Image Component',
            },
        },
    },
    render: args => ({
        components: { UiImage },
        setup() {
            return { args };
        },
        template: '<UiImage v-bind="args"/>',
    }),
    args: {
        origin: 'https://images.unsplash.com/photo-1675446340536-46f629dcb858?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2574&q=80',
        preview: 'data:image/jpeg;base64,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',
    },
} satisfies Meta<typeof UiImage>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {};

export const CustomPreview: Story = {
    args: {
        origin: 'https://images.unsplash.com/photo-1675446340536-46f629dcb858?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2574&q=80',
        preview: '',
    },
    render: args => ({
        components: { UiImage },
        setup() {
            return { args };
        },
        template: `
            <UiImage v-bind="args" style="width: 500px; height: 500px;">
                <template #preview>
                    <div class="UiImage__custom-preview">
                    </div>
                </template>
            </UiImage>
        `,
    }),
};
