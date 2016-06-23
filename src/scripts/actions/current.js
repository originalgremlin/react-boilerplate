'use strict';

import Constants from '../constants';
import Dispatcher from '../util/dispatcher';

let { Actions } = Constants;

export default {
    update: function (value) {
        Dispatcher.dispatch({
            type: Actions.UPDATE_CURRENT,
            value: value
        })
    }
};