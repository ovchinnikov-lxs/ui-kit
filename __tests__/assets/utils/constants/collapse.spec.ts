import { AXIS_TYPE } from '../../../../src/assets/utils/constants/collapse';

describe('Test collapse constants', () => {
    it('should have correct values for AXIS_TYPE', () => {
        expect(AXIS_TYPE.X).toBe('x');
        expect(AXIS_TYPE.Y).toBe('y');
    });
});
