'use strict';

import Action from '../actions/foo';
import Store from '../stores/foo';
import React from 'react';

class Component extends React.Component {
    constructor (props) {
        super(props);
        this.state = { };
        this.onDivChange = this.onDivChange.bind(this);
    }

    componentDidMount () {
        Store.addListener(this.onStoreChange);
    }

    componentWillUnmount () {
        Store.removeListener(this.onStoreChange);
    }

    shouldComponentUpdate (nextProps, nextState) {
        return true;
    }

    render () {
        return (
            <div className="" onChange={ this.onDivChange }>
                Boilerplate component
            </div>
        );
    }

    onDivChange (evt) {
        evt && evt.preventDefault() && evt.stopPropagation();
        Action.doSomething('with this value');
    }

    onStoreChange (a, b, c) {
        this.setState({ a: a, b: b, c: c });
    }
}

export default Component;
