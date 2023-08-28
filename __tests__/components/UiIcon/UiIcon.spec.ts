import { render } from '@testing-library/vue';
import UiIcon from '../../../src/components/UiIcon/UiIcon.vue';
import { expect } from 'vitest';
import { iconList } from '../../../src/components/UiIcon/helpers';

describe('Test UiIcon component', () => {
    it('it should availability a icon path from iconList ', () => {
        const ICON_NAME = 'close';
        const ICON_PATH = iconList.find(i => i.id == ICON_NAME)?.innerHTML || null;

        expect(ICON_PATH).not.toBe(null);
    });

    it('it should render svg with path from icon close', () => {
        const ICON_NAME = 'close';
        const ICON_PATH = iconList.find(i => i.id == ICON_NAME)?.innerHTML || null;

        const { html } = render(UiIcon, {
            props: {
                name: 'close',
            },
        });

        expect(html()).toContain(ICON_PATH);
    });

    it('should render svg icon from custom icon list', () => {
        const CUSTOM_LIST = [
            {
                id: 'full-screen',
                name: 'full-screen',
                innerHTML: '<path d="M21.3334 4H29.3334V12H26.6667V6.66667H21.3334V4ZM2.66669 4H10.6667V6.66667H5.33335V12H2.66669V4ZM26.6667 25.3333V20H29.3334V28H21.3334V25.3333H26.6667ZM5.33335 25.3333H10.6667V28H2.66669V20H5.33335V25.3333Z"></path>',
            },
        ];

        const { html } = render(UiIcon, {
            props: {
                name: 'full-screen',
                icons: CUSTOM_LIST,
            },
        });

        expect(html()).toContain('<path d="M21.3334 4H29.3334V12H26.6667V6.66667H21.3334V4ZM2.66669 4H10.6667V6.66667H5.33335V12H2.66669V4ZM26.6667 25.3333V20H29.3334V28H21.3334V25.3333H26.6667ZM5.33335 25.3333H10.6667V28H2.66669V20H5.33335V25.3333Z"></path>');
    });
});
