import { useStyle } from '../../src/composables/useStyle';

describe('Test composable useStyle', () => {
    it('should be availability', () => {
        expect(typeof useStyle).toBe('function');
    });

    it('should be return class list with modifier --is-solid', () => {
        const COMPONENT_PROPS = {};
        const EXPECTED_VALUE = [{
            '--is-solid': true,
        }];

        const { styleClassList } = useStyle(COMPONENT_PROPS);
        expect(styleClassList.value).toEqual(EXPECTED_VALUE);
    });

    it('should be return class list with modifier --is-outline', () => {
        const COMPONENT_PROPS = {
            outline: true,
        };
        const EXPECTED_VALUE = [{
            '--is-outline': true,
            '--is-solid': false,
        }];

        const { styleClassList } = useStyle(COMPONENT_PROPS);
        expect(styleClassList.value).toEqual(EXPECTED_VALUE);
    });

    it('should be return class list with modifier --is-rounded', () => {
        const COMPONENT_PROPS = {
            rounded: true,
        };
        const EXPECTED_VALUE = [{
            '--is-rounded': true,
            '--is-solid': true,
        }];

        const { styleClassList } = useStyle(COMPONENT_PROPS);
        expect(styleClassList.value).toEqual(EXPECTED_VALUE);
    });

    it('should be return class list with modifier --is-icon', () => {
        const COMPONENT_PROPS = {
            icon: true,
        };
        const EXPECTED_VALUE = [{
            '--is-icon': true,
            '--is-solid': true,
        }];

        const { styleClassList } = useStyle(COMPONENT_PROPS);
        expect(styleClassList.value).toEqual(EXPECTED_VALUE);
    });
});
