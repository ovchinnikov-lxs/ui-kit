import { useClassName } from '../../src/composables/useClassName';

describe('Test composable useClassName', () => {
    it('should be Availability', function() {
        expect(typeof useClassName).toBe('function');
    });

    it('should be return an object with a list of classes', function() {
        const COMPONENT_PROPS = {
            classPrefix: 'Test',
        };
        const EXPECTED_VALUE = [{
            UiSomeComponent: 'Ui',
            TestSomeComponent: true,
        }];

        const { getClassName } = useClassName(COMPONENT_PROPS);
        expect(getClassName.value('SomeComponent')).toEqual(EXPECTED_VALUE);
    });
});
