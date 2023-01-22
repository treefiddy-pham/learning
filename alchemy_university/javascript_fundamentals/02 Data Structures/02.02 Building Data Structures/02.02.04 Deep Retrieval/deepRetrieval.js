// retrieve a prop that is deeply nested within objects
// i.e. { prop: { prop: { prop: 3 }}} => 3
function deepRetrieval(obj) {
    if(typeof obj.prop != 'object') {
        return obj.prop;
    }
    else {
        return deepRetrieval(obj.prop);
    }
}

module.exports = deepRetrieval;