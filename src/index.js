module.exports = (config) => {
    const unreduce = require('unreduce');
    const type = require('@melgrove/type');
    if(type(config) == 'undefined' || config.global === true) {
        global.unreduce = unreduce;
        global.type = type;
    } else if(config.global === false) {
        return({
            unreduce,
            type
        });
    } else {
        throw Error("Argument must be undefined or {global: true | flase}")
    }
}