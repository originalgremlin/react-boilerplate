'use strict';

import Constants from '../constants';
import Dispatcher from '../util/dispatcher';

let { Actions } = Constants;

export default {
    update: function (chart, values = {}) {
        Dispatcher.dispatch({
            type: Actions.UPDATE_CHART,
            chart: chart,
            values: values
        })
    }
};