import { formatBytes } from '../../../../src/assets/utils/helpers/file-helpers';

describe('Test file helpers', () => {
    it('should format bytes correctly', () => {
        expect(formatBytes(1024)).toBe('1 КБ');
        expect(formatBytes(1024 * 1024)).toBe('1 МБ');
        expect(formatBytes(1024 * 1024 * 1024)).toBe('1 ГБ');
    });

    it('should format zero bytes', () => {
        expect(formatBytes(0)).toBe('0 Байт');
    });
});
