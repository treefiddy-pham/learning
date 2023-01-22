const group = require('../group');
const { assert } = require('chai');

describe('group', function () {
    it('should handle grouping one fruit', () => {
        const arr = [{ food: 'apple', type: 'fruit' }];
        const grouped = { fruit: ['apple'] }
        assert.sameMembers(group(arr).fruit, grouped.fruit);
    });

    it('should handle two fruits and a vegetable', () => {
        const arr = [{ food: 'apple', type: 'fruit' }, { food: 'orange', type: 'fruit' }, { food: 'carrot', type: 'vegetable' }];
        const grouped = { fruit: ['orange', 'apple'], vegetable: ['carrot'] }
        assert.sameMembers(group(arr).fruit, grouped.fruit);
        assert.sameMembers(group(arr).vegetable, grouped.vegetable);
    });

    it('should handle fruits, vegetables, dairy and grains', () => {
        const arr = [
            { food: 'carrot', type: 'vegetable' },
            { food: 'apple', type: 'fruit' }, 
            { food: 'cheese', type: 'dairy' }, 
            { food: 'orange', type: 'fruit' },
            { food: 'quinoa', type: 'grain' },
            { food: 'broccoli', type: 'vegetable' },
            { food: 'rice', type: 'grain' },
        ];
        const grouped = { fruit: ['orange', 'apple'], vegetable: ['carrot', 'broccoli'], grain: ['quinoa', 'rice'], dairy: ['cheese'] }
        assert.sameMembers(group(arr).fruit, grouped.fruit);
        assert.sameMembers(group(arr).vegetable, grouped.vegetable);
        assert.sameMembers(group(arr).grain, grouped.grain);
        assert.sameMembers(group(arr).dairy, grouped.dairy);
    });
});