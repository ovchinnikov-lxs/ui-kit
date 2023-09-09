import type { Meta, StoryObj } from '@storybook/vue3';

import UiFileInput from '../../src/components/UiFileInput/UiFileInput.vue';
import UiImage from '../../src/components/UiImage/UiImage.vue';
import UiButton from '../../src/components/UiButton/UiButton.vue';

// Constants
import { SIZE_ARGS } from '../assets/constants/sizes';
import { COLOR_ARGS, COLOR_DICT } from '../assets/constants/colors';
import { SIZES_DICT } from '../../src/assets/utils/constants/sizes';
import { DOCS_TEMPLATE } from './UiFileInput.template';

const meta = {
    title: 'Example/UiFileInput/Docs',
    component: UiFileInput,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: 'Docs input component',
            },
        },
    },
    argTypes: {
        ...SIZE_ARGS,
        ...COLOR_ARGS,
    },
    render: args => ({
        components: {
            UiFileInput,
            UiImage,
            UiButton,
        },
        setup() {
            return { args };
        },
        template: DOCS_TEMPLATE,
    }),
    args: {
        size: SIZES_DICT.MEDIUM,
        color: COLOR_DICT.PRIMARY,
    },
} satisfies Meta<typeof UiFileInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
