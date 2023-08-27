import { render } from '@testing-library/vue';
import UiIcon from '../../../src/components/UiIcon/UiIcon.vue';

describe('Test UiIcon component', () => {
    it('it should work', () => {
        const { debug } = render(UiIcon, {
            props: {
                name: 'close',
            },
        });

        debug();
    });
});
