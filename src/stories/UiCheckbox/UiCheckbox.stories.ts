import type { Meta, StoryObj } from '@storybook/vue3';

import UiCheckbox from '~/components/UiCheckbox/UiCheckbox.vue';

// Constants
import { SIZE_ARGS } from '~/stories/assets/constants/sizes';
import { COLOR_ARGS, COLOR_DICT } from '~/stories/assets/constants/colors';
import { SIZES_DICT } from '~/assets/utils/constants/sizes';
import { DISABLED_ARGS } from '~/stories/assets/constants/states';
import { DEFAULT_TEMPLATE } from '~/stories/UiCheckbox/UiCheckbox.template';

const meta = {
    title: 'Example/UiCheckbox',
    component: UiCheckbox,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: 'Boolean checked component',
            },
        },
    },
    argTypes: {
        ...SIZE_ARGS,
        ...COLOR_ARGS,
        ...DISABLED_ARGS,
    },
    render: args => ({
        components: { UiCheckbox },
        setup() {
            return { args };
        },
        template: DEFAULT_TEMPLATE,
    }),
    args: {
        size: SIZES_DICT.MEDIUM,
        color: COLOR_DICT.PRIMARY,
    },
} satisfies Meta<typeof UiCheckbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
