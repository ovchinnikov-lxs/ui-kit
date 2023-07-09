import type {Preview} from '@storybook/vue3';

import '../src/stories/assets/style/shared/default.scss';
import '../src/stories/UiButton/UiButton.scss';
import '../src/stories/UiLink/UiLink.scss';
import '../src/stories/UiFormCell/UiFormCell.scss';

const preview: Preview = {
    parameters: {
        actions: {argTypesRegex: '^on[A-Z].*'},
    },
};

export default preview;
