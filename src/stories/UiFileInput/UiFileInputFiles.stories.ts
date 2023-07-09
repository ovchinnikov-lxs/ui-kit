import type { Meta, StoryObj } from '@storybook/vue3';

import UiFileInput from '~/components/UiFileInput/UiFileInput.vue';
import UiImage from '~/components/UiImage/UiImage.vue';
import UiButton from '~/components/UiButton/UiButton.vue';

// Constants
import { SIZE_ARGS } from '~/stories/assets/constants/sizes';
import { COLOR_ARGS, COLOR_DICT } from '~/stories/assets/constants/colors';
import { SIZES_DICT } from '~/assets/utils/constants/sizes';
import { FILES_TEMPLATE } from '~/stories/UiFileInput/UiFileInput.template';

const meta = {
    title: 'Example/UiFileInput/Files',
    component: UiFileInput,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: 'Files input component',
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
        template: FILES_TEMPLATE,
    }),
    args: {
        size: SIZES_DICT.MEDIUM,
        color: COLOR_DICT.PRIMARY,
    },
} satisfies Meta<typeof UiFileInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
