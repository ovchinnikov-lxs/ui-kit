import { iconList } from '../../../src/components/UiIcon/helpers';
import type { IIconItem } from '../../../src/components/UiIcon/helpers';

describe('Test UiIcon helpers', () => {
    it('should have correct values for iconList', () => {
        const expectedStructure: IIconItem[] = Array.from({ length: iconList.length }, () => ({
            id: expect.any(String),
            name: expect.any(String),
            innerHTML: expect.any(String),
        }));

        expect(iconList).toEqual(expectedStructure);
    });

    it('each item in iconList should have valid properties', () => {
        iconList.forEach(item => {
            expect(item.id).toEqual(expect.any(String));
            expect(item.name).toEqual(expect.any(String));
            expect(item.innerHTML).toEqual(expect.any(String));
        });
    });
});
