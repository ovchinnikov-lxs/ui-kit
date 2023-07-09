import type {Preview} from '@storybook/vue3';

import '../src/stories/assets/style/shared/default.scss';
import '../src/stories/UiButton/UiButton.scss';

const preview: Preview = {
    parameters: {
        actions: {argTypesRegex: '^on[A-Z].*'},
        // controls: {
        //     matchers: {
        //         color: /(background|color)$/i,
        //         date: /Date$/,
        //     },
        // },
    },
};

export default preview;
