'use strict';

import React from 'react';

class Header extends React.Component {
    render () {
        return (
            <header className="main">
                { this.props.title }
            </header>
        );
    }
}

export default Header;
