const Dialog = require('../dialogCallback');
const { assert } = require('chai');

describe('Dialog', () => {
    it('should allow me to register a callback', () => {
        const dialog = new Dialog();
        let called = false;
        dialog.onClose(() => {
            called = true;
        });
        dialog.close();
        assert(called, "Callback was not called after close");
    });
});