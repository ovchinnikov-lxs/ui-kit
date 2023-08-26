import { TYPES_DICT } from '../../../../src/assets/utils/constants/input';

describe('Test input constants', () => {
    it('should have correct values for TYPES_DICT', () => {
        expect(TYPES_DICT.NUMERIC).toBe('numeric');
        expect(TYPES_DICT.STRING).toBe('string');
    });
});
