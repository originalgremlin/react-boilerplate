'use strict';

let symbolize = (keys) => {
    let rv = {};
    keys.forEach(key => rv[key] = Symbol(key));
    return rv;
};

export default {
    Properties: {
        'PROP_ONE',
        'PROP_TWO',
        'PROP_THREE'
    },
    Actions: symbolize([
        'UPDATE_ONE',
        'UPDATE_TWO',
        'UPDATE_THREE'
    ]),
    Events: symbolize([
        'ONE',
        'TWO',
        'THREE'
    ])
};
