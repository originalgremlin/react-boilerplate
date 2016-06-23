'use strict';

import Constants from '../constants';
import Dispatcher from '../util/dispatcher';

let { Actions } = Constants;

export default {
    update: function (form, values = {}) {
        Dispatcher.dispatch({
            type: Actions.UPDATE_FORM,
            form: form,
            values: values
        })
    }
};