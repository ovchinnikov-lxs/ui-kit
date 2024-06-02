import { describe, expect, it } from 'vitest';

describe('test input constants', () => {
    it('should have correct values for TYPES_DICT', () => {
        expect(TYPES_DICT.NUMERIC).toBe('numeric');
        expect(TYPES_DICT.STRING).toBe('string');
    });
});
