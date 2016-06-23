'use strict';

import Immutable from 'classy-immutable';

class Model extends Immutable {
    static toCurrency (number) {
        let options = {
            style: 'currency',
            currency: 'USD',
            currencyDisplay: 'symbol'
        };
        return number.toLocaleString(navigator.language, options);
    }

    static toPercentage (number) {
        let options = {
            style: 'percent',
            minimumFractionDigits: 1
        };
        return number.toLocaleString(navigator.language, options);
    }

    get data () {
        return {};
    }
}

export default Model;