import React from 'react';
import axios from 'axios';

import './styles.css';

const Logout = (props) => {
    axios.get(`/api/logout`)
        .then(response => {
            setTimeout(()=>{
                props.history.push('/')
            },2000)
        })
    return (
        <div className="logout_container">
            <h1 style={{marginTop:"50%", marginLeft:"20%"}}>Sorry to see you go :(</h1>
        </div>
    )
}

export default Logout;