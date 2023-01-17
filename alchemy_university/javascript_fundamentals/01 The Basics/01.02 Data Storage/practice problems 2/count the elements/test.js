const {assert} = require('chai');
const countElements = require('../countElements');

describe('countElements', () => {
    it('should return an empty object', () => {
        const elements = [];
        const result = countElements(elements);
        assert.deepEqual(result, {});
    })

    it('should return an object of non-duplicative element counts', () => {
        const elements = ["a", "a", "b", "c", "b", "d"];
        const result = countElements(elements);
        assert.deepEqual(result, {a: 2, b: 2, c: 1, d: 1})
    })
})