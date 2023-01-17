// returns property name on this. This allows function call to define properties during the call.
function thisName() {
    // if function is called directly, an exception will be thrown.
    // function has to be called bound to an object. e.g. thisName.call({name: 'Bob'})
    return this.name;
}

module.exports = thisName;