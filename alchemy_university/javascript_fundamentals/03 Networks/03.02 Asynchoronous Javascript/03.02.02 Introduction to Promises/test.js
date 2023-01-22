const { finishFood, problem } = require('../Kitchen');
const Order = require('../Order');
const { assert } = require('chai');

describe('failed order', () => {
    let order = new Order();

    it('should not initially be ready', () => {
        assert.equal(order.isReady, false);
    });

    describe('after calling request', () => {
        const request = { id: 1, burgers: 1 } 
        before(() => {
            order.request(request);
        });

        it('should still not be ready', () => {
            assert.equal(order.isReady, false);
        });

        describe('after a problem', () => {
            const err = 'No Burgers Left';
            before(() => {
                problem(request, err);
            });

            it('should have an error', () => {
                assert.equal(order.error, err);
            });
        });
    });
});

describe('successful order', () => {
    const order = new Order();

    it('should not initially be ready', () => {
        assert.equal(order.isReady, false);
    });

    describe('after calling request', () => {
        const request = { id: 2, chicken: 1, fries: 1 } 
        before(() => {
            order.request(request);
        });

        it('should still not be ready', () => {
            assert.equal(order.isReady, false);
        });

        describe('after food is done', () => {
            before(() => {
                finishFood(request);
            });

            it('should still be ready', () => {
                assert.equal(order.isReady, true);
            });
        });
    });
});
