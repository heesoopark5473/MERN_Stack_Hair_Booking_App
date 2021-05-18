import React, { Component } from 'react';

import Main from './Main/index';
import Recommendation from './Recommendation/index';

class Home extends Component {
    render() {
        return(
            <div>
                <Main/>
                <Recommendation/>
            </div>
        )
    }
}



export default Home;