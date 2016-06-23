'use strict';

import Dispatcher from '../util/dispatcher';
import EventEmitter from 'events';

class Store extends EventEmitter {
    constructor (cb) {
        super();
        this.dispatchToken = Dispatcher.register(cb instanceof Function ? cb.bind(this, this) : () => {});
    }
}

export default Store;
