// same logic, but because dealing in booleans, can shortcut

function onlyTrue(array) {
    return array.filter((function(x) {
        return x;
    }));
}

module.exports = onlyTrue;