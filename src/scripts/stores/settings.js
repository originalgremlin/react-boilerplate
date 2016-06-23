'use strict';

import Constants from '../constants';
import BaseStore from './Store';
import _ from 'lodash';

let { Actions, Events } = Constants;
let data = window.localStorage;

let parse = (value) => {
    try {
        return JSON.parse(value);
    } catch (e) {
        return value;
    }
};

class Store extends BaseStore {
    emit (key, value) {
        super.emit(Events.SETTINGS, key, value);
    }

    addListener (cb) {
        super.addListener(Events.SETTINGS, cb);
    }

    removeListener (cb) {
        super.removeListener(Events.SETTINGS, cb);
    }

    get data () {
        return _.mapValues(data, parse);
    }

    get (key, def) {
        return data.hasOwnProperty(key) ? parse(data[key]) : def;
    }
}

export default new Store((store, action) => {
    switch (action.type) {
        case Actions.UPDATE_ONE:
        {
            let key = `one/${ action.name }`,
                value = JSON.stringify(action.values);
            data.setItem(key, value);
            store.emit(key, value);
            break;
        }

        default:
            break;
    }
});