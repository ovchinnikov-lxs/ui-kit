import type { App } from 'vue';
import {
    OButton,
    OLink,
    OFormCell,
    OInput,
    ORichText,
    OPopover,
    OSelect,
    OSelectHeader,
    OSelectOptions,
    OIcon,
    OImage,
    OCollapse,
    OPreloader,
} from '~/components/index';

export default {
    install: (app: App) => {
        app.component('OButton', OButton);
        app.component('OLink', OLink);
        app.component('OFormCell', OFormCell);
        app.component('OInput', OInput);
        app.component('ORichText', ORichText);
        app.component('OPopover', OPopover);
        app.component('OSelect', OSelect);
        app.component('OSelectHeader', OSelectHeader);
        app.component('OSelectOptions', OSelectOptions);
        app.component('OIcon', OIcon);
        app.component('OImage', OImage);
        app.component('OCollapse', OCollapse);
        app.component('OPreloader', OPreloader);
    },
};

export {
    OButton,
    OLink,
    OFormCell,
    OInput,
    ORichText,
    OPopover,
    OSelect,
    OSelectHeader,
    OSelectOptions,
    OIcon,
    OImage,
    OCollapse,
    OPreloader,
};
