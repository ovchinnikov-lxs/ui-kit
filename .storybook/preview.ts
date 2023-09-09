import type {Preview} from '@storybook/vue3';

import '../stories/assets/style/shared/default.scss';
import '../stories/UiButton/UiButton.scss';
import '../stories/UiLink/UiLink.scss';
import '../stories/UiFormCell/UiFormCell.scss';
import '../stories/UiCheckbox/UiCheckbox.scss';
import '../stories/UiFileInput/UiFileInput.scss';
import '../stories/UiIcon/UiIcon.scss';
import '../stories/UiImage/UiImage.scss';
import '../stories/UiInput/UiInput.scss';
import '../stories/UiPlate/UiPlate.scss';
import '../stories/UiPopover/UiPopover.scss';
import '../stories/UiPreloader/UiPreloader.scss';
import '../stories/UiRadio/UiRadio.scss';

const preview: Preview = {
    parameters: {
        actions: {argTypesRegex: '^on[A-Z].*'},
    },
};

export default preview;
