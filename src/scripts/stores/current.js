'use strict';

import BaseStore from './Store';
import Constants from '../constants';
import Immutable from 'classy-immutable';
import Settings from './settings';

let { Actions, Events } = Constants;
let data = Settings.get('current', 'retirement');

class Store extends BaseStore {
    emit () {
        super.emit(Events.CURRENT, data);
    }

    addListener (cb) {
        super.addListener(Events.CURRENT, cb);
    }

    removeListener (cb) {
        super.removeListener(Events.CURRENT, cb);
    }

    get data () {
        return data;
    }
}

export default new Store((store, action) => {
    switch (action.type) {
        case Actions.UPDATE_CURRENT:
            data = action.value;
            store.emit();
            break;

        default:
            break;
    }
});