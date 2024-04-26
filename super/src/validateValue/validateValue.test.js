// import validateValue from './validateValue';
const validateValue = require('./validateValue');

describe('validateValue', () => {
    test('Корректное значение', () => {
        expect(validateValue(50)).toBe(true);
    });
    test('Меньше корректного', () => {
        expect(validateValue(-1)).toBe(false);
    });
    test('Больше корректного', () => {
        expect(validateValue(101)).toBe(false);
    });
    test('Пограничое значение снизу', () => {
        expect(validateValue(0)).toBe(true);
    });
    test('Пограничое значение сверху', () => {
        expect(validateValue(100)).toBe(true);
    });

});
