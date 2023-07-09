import type { Meta, StoryObj } from '@storybook/vue3';

import UiButton from '~/components/UiButton/UiButton.vue';

// Constants
import { SIZES_DICT } from '~/assets/utils/constants/sizes';
import { COLOR_DICT } from '~/stories/assets/constants/colors';
import { STYLES_ARGS, STYLES_DESCRIPTION } from '~/stories/assets/constants/styles';

const meta = {
    title: 'Example/UiButton/Styles',
    component: UiButton,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: STYLES_DESCRIPTION,
            },
        },
    },
    argTypes: {
        ...STYLES_ARGS,
    },
    render: args => ({
        components: { UiButton },
        setup() {
            return { args };
        },
        template: '<UiButton v-bind="args">Button</UiButton>',
    }),
    args: {
        color: COLOR_DICT.PRIMARY,
        size: SIZES_DICT.MEDIUM,
    },
} satisfies Meta<typeof UiButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Outline: Story = {
    args: { outline: true },
};
export const Rounded: Story = {
    args: { rounded: true },
};
export const Icon: Story = {
    args: { icon: true },
    render: args => ({
        components: { UiButton },
        setup() {
            return { args };
        },
        template: `
            <UiButton v-bind="args">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="48" height="48" version="1.1" viewBox="0 0 48 48">
                    <title>illustration/code-brackets</title>
                    <g id="illustration/code-brackets" fill="none" fill-rule="evenodd" stroke="none" stroke-width="1">
                        <path id="Combined-Shape" fill="#87E6E5" d="M11.4139325,12 C11.7605938,12 12,12.5059743 12,13.3779712 L12,17.4951758 L6.43502246,23.3839989 C5.85499251,23.9978337 5.85499251,25.0021663 6.43502246,25.6160011 L12,31.5048242 L12,35.6220288 C12,36.4939606 11.7605228,37 11.4139325,37 C11.2725831,37 11.1134406,36.9158987 10.9453839,36.7379973 L0.435022463,25.6160011 C-0.145007488,25.0021663 -0.145007488,23.9978337 0.435022463,23.3839989 L10.9453839,12.2620027 C11.1134051,12.0841663 11.2725831,12 11.4139325,12 Z M36.5860675,12 C36.7274169,12 36.8865594,12.0841013 37.0546161,12.2620027 L47.5649775,23.3839989 C48.1450075,23.9978337 48.1450075,25.0021663 47.5649775,25.6160011 L37.0546161,36.7379973 C36.8865949,36.9158337 36.7274169,37 36.5860675,37 C36.2394062,37 36,36.4940257 36,35.6220288 L36,31.5048242 L41.5649775,25.6160011 C42.1450075,25.0021663 42.1450075,23.9978337 41.5649775,23.3839989 L36,17.4951758 L36,13.3779712 C36,12.5060394 36.2394772,12 36.5860675,12 Z"/>
                        <rect id="Rectangle-7-Copy-5" width="35.57" height="4" x="5.009" y="22.662" fill="#A0DB77" rx="2" transform="translate(22.793959, 24.662305) rotate(-75.000000) translate(-22.793959, -24.662305)"/>
                    </g>
                </svg>
            </UiButton>
        `,
    }),
};
