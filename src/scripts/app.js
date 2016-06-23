'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header';
import Content from './components/content';
import Footer from './components/footer';

class App extends React.Component {
    render () {
        return (
            <div>
                <Header title="boilerplate header" />
                <Content />
                <Footer />
            </div>
        );
    }
}

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(<App />, document.getElementById('app'));
});
