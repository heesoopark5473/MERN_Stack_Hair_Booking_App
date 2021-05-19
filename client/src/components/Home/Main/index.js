import React from 'react';

import './styles.css';

// import LocationSearchInput from '../GoogleMaps/index';
import SearchBar from '../SearchBar/index';

const Main = () => {

    return (
        <header className="d-flex masthead" style={{
            backgroundImage:`url('assets/img/MainBackground/bg-masthead_1.jpg')`,
            // height: "100%"
        }}>

            <div className="container">
                <SearchBar/>
            </div>
        </header>
    )
}

export default Main;