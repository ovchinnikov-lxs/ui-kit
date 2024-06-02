import { describe, expect, it } from 'vitest';
describe('test composable useUiStyle', () => {
    it('should be availability', () => {
        expect(typeof useUiStyle).toBe('function');
    });

    it('should be return class list with modifier --is-outline', () => {
        const COMPONENT_PROPS = {
            outline: true,
        };
        const EXPECTED_VALUE = [
            {
                '--is-outline': true,
            },
        ];

        const { styleClassList } = useUiStyle(COMPONENT_PROPS);
        expect(styleClassList.value).toEqual(EXPECTED_VALUE);
    });

    it('should be return class list with modifier --is-rounded', () => {
        const COMPONENT_PROPS = {
            rounded: true,
        };
        const EXPECTED_VALUE = [
            {
                '--is-rounded': true,
            },
        ];

        const { styleClassList } = useUiStyle(COMPONENT_PROPS);
        expect(styleClassList.value).toEqual(EXPECTED_VALUE);
    });

    it('should be return class list with modifier --is-icon', () => {
        const COMPONENT_PROPS = {
            icon: true,
        };
        const EXPECTED_VALUE = [
            {
                '--is-icon': true,
            },
        ];

        const { styleClassList } = useUiStyle(COMPONENT_PROPS);
        expect(styleClassList.value).toEqual(EXPECTED_VALUE);
    });
});
