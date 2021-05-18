import React from 'react';

import './styles.css';

import LocationSearchInput from '../GoogleMaps/index';

const Main = () => {

    return (
        <header className="d-flex masthead" style={{
            backgroundImage:`url('assets/img/MainBackground/bg-masthead_2.jpg')`,
            height: "60%"
        }}>

            <div className="container">
                <LocationSearchInput/>
            </div>
        </header>
    )
}

export default Main;