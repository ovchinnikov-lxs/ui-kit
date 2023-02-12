import type { App } from 'vue';
import {
    UiButton,
    UiLink,
    UiFormCell,
    UiInput,
    UiRichText,
    UiRadio,
    UiPopover,
    UiSelect,
    UiSelectHeader,
    UiSelectOptions,
    UiTooltip,
    UiIcon,
    UiImage,
    UiCollapse,
    UiPreloader,
} from '~/components/index';

export default {
    install: (app: App) => {
        app.component('UiButton', UiButton);
        app.component('UiLink', UiLink);
        app.component('UiFormCell', UiFormCell);
        app.component('UiInput', UiInput);
        app.component('UiRichText', UiRichText);
        app.component('UiRadio', UiRadio);
        app.component('UiPopover', UiPopover);
        app.component('UiSelect', UiSelect);
        app.component('UiSelectHeader', UiSelectHeader);
        app.component('UiSelectOptions', UiSelectOptions);
        app.component('UiTooltip', UiTooltip);
        app.component('UiIcon', UiIcon);
        app.component('UiImage', UiImage);
        app.component('UiCollapse', UiCollapse);
        app.component('UiPreloader', UiPreloader);
    },
};

export {
    UiButton,
    UiLink,
    UiFormCell,
    UiInput,
    UiRichText,
    UiRadio,
    UiPopover,
    UiSelect,
    UiSelectHeader,
    UiSelectOptions,
    UiTooltip,
    UiIcon,
    UiImage,
    UiCollapse,
    UiPreloader,
};
