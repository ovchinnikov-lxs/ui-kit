import { describe, expect, it } from 'vitest';

describe('test position constants', () => {
    it('should have correct values for POSITION_OPTIONS', () => {
        expect(POSITION_OPTIONS.TOP).toBe('top');
        expect(POSITION_OPTIONS.RIGHT).toBe('right');
        expect(POSITION_OPTIONS.BOTTOM).toBe('bottom');
        expect(POSITION_OPTIONS.LEFT).toBe('left');
        expect(POSITION_OPTIONS.CENTER).toBe('center');
    });
});
