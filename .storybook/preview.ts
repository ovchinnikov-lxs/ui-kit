import type {Preview} from '@storybook/vue3';

import '../src/stories/assets/style/shared/default.scss';
import '../src/stories/UiButton/UiButton.scss';
import '../src/stories/UiLink/UiLink.scss';
import '../src/stories/UiFormCell/UiFormCell.scss';
import '../src/stories/UiCheckbox/UiCheckbox.scss';
import '../src/stories/UiFileInput/UiFileInput.scss';
import '../src/stories/UiIcon/UiIcon.scss';
import '../src/stories/UiImage/UiImage.scss';

const preview: Preview = {
    parameters: {
        actions: {argTypesRegex: '^on[A-Z].*'},
    },
};

export default preview;
