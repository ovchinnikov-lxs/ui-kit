import { useClassName } from '../../src/composables/useClassName';

describe('Проверка useClassName', () => {
    it('Должен вернуть список с объектом классов', function() {
        const CLASS_NAME = 'Test';

        const res = useClassName(CLASS_NAME);
        expect(res.getClassName.value(CLASS_NAME)).toEqual([{ OTest: 'O', TestTest: true }]);
    });
});
