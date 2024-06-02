import { describe, expect, it } from 'vitest';
describe('test composable useUiSize', () => {
    it('should be availability', () => {
        expect(typeof useUiSize).toBe('function');
    });

    it('should be return class list with size modifier --large-size', () => {
        const COMPONENTS_PROPS = {
            size: 'large',
        };
        const EXPECTED_VALUE = [
            {
                '--large-size': 'large',
            },
        ];

        const { sizeClassList } = useUiSize(COMPONENTS_PROPS);
        expect(sizeClassList.value).toEqual(EXPECTED_VALUE);
    });
});
