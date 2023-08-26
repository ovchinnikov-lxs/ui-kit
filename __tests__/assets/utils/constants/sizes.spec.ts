import { SIZES_DICT } from '../../../../src/assets/utils/constants/sizes';

describe('Test sizes constants', () => {
    it('should have correct values for SIZES_DICT', () => {
        expect(SIZES_DICT.X_SMALL).toBe('x-small');
        expect(SIZES_DICT.SMALL).toBe('small');
        expect(SIZES_DICT.MEDIUM).toBe('medium');
        expect(SIZES_DICT.LARGE).toBe('large');
        expect(SIZES_DICT.X_LARGE).toBe('x-large');
        expect(SIZES_DICT.XX_LARGE).toBe('xx-large');
        expect(SIZES_DICT.CUSTOM).toBe('custom');
    });
});
