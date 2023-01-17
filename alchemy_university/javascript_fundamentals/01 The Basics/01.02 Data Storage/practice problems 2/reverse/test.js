const { assert } = require('chai');
const reverse = require('../reverse');

describe('reverse', () => {
    it('should return an empty string', () => {
        assert.equal(reverse(""), "");
    });

    it('should reverse a short string', () => {
        assert.equal(reverse('cat'), 'tac');
    });

    it('should reverse a long string', () => {
        assert.equal(reverse('macintosh'), 'hsotnicam');
    });
})