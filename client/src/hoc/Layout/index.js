import React, { Component } from 'react';

import Header from '../../components/Header/index';

const Layout = (props) => {
    return (
        <div>
            <Header/>
            <div>
                {props.children}
            </div>
        </div>
    )
}

export default Layout;