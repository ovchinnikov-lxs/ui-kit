import { describe, expect, it } from 'vitest';

describe('test composable useUiClassName', () => {
    it('should be availability', () => {
        expect(typeof useUiClassName).toBe('function');
    });

    it('should be return an object with a list of classes', () => {
        const COMPONENT_PROPS = {
            classPrefix: 'Test',
        };
        const EXPECTED_VALUE = [
            {
                UiSomeComponent: 'Ui',
                TestSomeComponent: true,
            },
        ];

        const { getClassName } = useUiClassName(COMPONENT_PROPS);
        expect(getClassName.value('SomeComponent')).toEqual(EXPECTED_VALUE);
    });
});
