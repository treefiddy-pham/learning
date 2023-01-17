// expand on previous module to add new function from thisName that is bound to object with name Bob
// export the new function instead of thisName

function thisName() {
    return this.name;
}

const newFunction = thisName.bind({name: 'Bob'});

module.exports = newFunction;