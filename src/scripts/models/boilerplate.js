'use strict';

import Model from './Model';

class Boilerplate extends Model {
    constructor (
        arg1 = 1,
        arg2 = 'two',
        arg3 = [3, 3, 3]
    ) {
        super();
        this.arg1 = arg1;
        this.arg2 = arg2;
        this.arg3 = arg3;
    }

    get times10 () {
        return this.arg1 * 10;
    }
}

Boilerplate.STATIC_PROP = 42;

export default Boilerplate;
