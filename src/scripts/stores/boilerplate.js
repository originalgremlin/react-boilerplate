'use strict';

import Constants from '../constants';
import Immutable from 'classy-immutable';
import BaseStore from './Store';

let { Actions, Events } = Constants;
let data = Immutable.object({});

class Store extends BaseStore {
    emit () {
        super.emit(Events.__EVENT__, data);
    }

    addListener (cb) {
        super.addListener(Events.__EVENT__, cb);
    }

    removeListener (cb) {
        super.removeListener(Events.__EVENT__, cb);
    }

    get data () {
        return data;
    }
}

export default new Store((store, action) => {
    switch (action.type) {
        case Actions.__ACTION__:
            data = data.merge(action.values);
            store.emit();
            break;

        default:
            break;
    }
});