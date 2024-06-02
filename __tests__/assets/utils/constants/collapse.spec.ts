import { describe, expect, it } from 'vitest';

describe('test collapse constants', () => {
    it('should have correct values for AXIS_TYPE', () => {
        expect(AXIS_TYPE.X).toBe('x');
        expect(AXIS_TYPE.Y).toBe('y');
    });
});
