const mapArrToStrings = require('./mapArrToStrings');

describe('mapArrToStrings', () => {
    test('Корректное значение', () => {
        expect(mapArrToStrings([1, 2, 3])).toEqual(['1', '2', '3']);
    });
    test('Мешанина', () => {
        expect(mapArrToStrings([1, 2, 3, null, undefined, 'asdfsa'])).toEqual(['1', '2', '3']);
    });
    test('Пустой массив', () => {
        expect(mapArrToStrings([])).toEqual([]);
    });
    test('Отрицаник', () => {
        expect(mapArrToStrings([1, 2, 3])).not.toEqual([1, 2, 3, 4]);
    });
});
