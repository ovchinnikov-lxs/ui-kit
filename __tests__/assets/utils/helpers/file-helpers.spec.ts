import { describe, expect, it } from 'vitest';

describe('test file helpers', () => {
    it('should return false on invalid URL', () => {
        expect(isValidUrl('base/invalid')).toBe(false);
    });

    it('should return true on valid URL', () => {
        expect(isValidUrl('https://google.com')).toBe(true);
    });
});
