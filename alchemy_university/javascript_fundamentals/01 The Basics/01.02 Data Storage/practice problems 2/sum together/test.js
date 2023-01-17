const {assert} = require('chai');
const sumTogether = require('../sumTogether');

describe('sumTogether', () => {
    it('should return an empty array', () => {
        const arr1 = [];
        const arr2 = [];
        const result = sumTogether(arr1, arr2);
        assert.deepEqual(result, []);
    })

    it('should return an array of summed elements', () => {
        const arr1 = [10, 20, 30];
        const arr2 = [15, 25, 35];
        const result = sumTogether(arr1, arr2);
        assert.deepEqual(result, [25, 45, 65]);
    })
})