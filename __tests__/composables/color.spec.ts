import { describe, expect, it } from 'vitest';
describe('test composable useUiColor', () => {
    it('should be availability', () => {
        expect(typeof useUiColor).toBe('function');
    });

    it('should be return class list with color modifier', () => {
        const COMPONENT_PROPS = {
            color: 'red',
        };
        const EXPECTED_VALUE = [
            {
                '--red-color': 'red',
            },
        ];

        const { colorClassList } = useUiColor(COMPONENT_PROPS);
        expect(colorClassList.value).toEqual(EXPECTED_VALUE);
    });
});
