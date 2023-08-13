import { useColor } from '../../src/composables/useColor';

describe('Test composable useColor', () => {
    it('should be Availability', function() {
        expect(typeof useColor).toBe('function');
    });

    it('should be return class list with color modifier', () => {
        const COMPONENT_PROPS = {
            color: 'red',
        };
        const EXPECTED_VALUE = [{
            '--red-color': 'red',
        }];

        const { colorClassList } = useColor(COMPONENT_PROPS);
        expect(colorClassList.value).toEqual(EXPECTED_VALUE);
    });
});
