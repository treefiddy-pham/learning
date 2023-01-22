// maps the previously created squared function

const squared = require('./squared');

function squaredMap(arr) {
    return arr.map(squared);
}

module.exports = squaredMap;