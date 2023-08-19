import { useSize } from '../../src/composables/useSize';

describe('Test composable useSize', () => {
    it('should be availability', () => {
        expect(typeof useSize).toBe('function');
    });

    it('should be return class list with size modifier --large-size', () => {
        const COMPONENTS_PROPS = {
            size: 'large',
        };
        const EXPECTED_VALUE = [{
            '--large-size': 'large',
        }];

        const { sizeClassList } = useSize(COMPONENTS_PROPS);
        expect(sizeClassList.value).toEqual(EXPECTED_VALUE);
    });
});
