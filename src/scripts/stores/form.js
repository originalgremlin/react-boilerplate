'use strict';

import BaseStore from './Store';
import Constants from '../constants';
import Immutable from 'classy-immutable';
import Settings from './settings';

import House from '../models/House';
import Retirement from '../models/Retirement';

let { Actions, Events } = Constants;
let data = Immutable.object({
    house: House.create().merge(Settings.get('form/house', {})),
    retirement: Retirement.create().merge(Settings.get('form/retirement', {}))
});

class Store extends BaseStore {
    emit (form) {
        super.emit(Events.FORM, form, data[form]);
    }

    addListener (cb) {
        super.addListener(Events.FORM, cb);
    }

    removeListener (cb) {
        super.removeListener(Events.FORM, cb);
    }

    get data () {
        return data;
    }

    get (type) {
        return data[type];
    }
}

export default new Store((store, action) => {
    switch (action.type) {
        case Actions.UPDATE_FORM:
        {
            let { form, values } = action;
            data = data.set(form, data[form].merge(values));
            store.emit(form);
            break;
        }

        default:
            break;
    }
});