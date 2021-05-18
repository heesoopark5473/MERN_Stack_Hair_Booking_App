import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './styles.css';

const HeaderItems = ({ user }) => {
    const items = [
        {
            type        : "nav-item",
            text        : 'Home',
            link        : '/',
            restricted  : false
        },
        {
            type        : "nav-item",
            text        : 'Features',
            link        : '/features',
            restricted  : false
        },
        {
            type        : "nav-item",            
            text        : 'Pricing',
            link        : '/pricing',
            restricted  : false
        },
        {
            type        : "nav-item",            
            text        : 'About Us',
            link        : '/about-us',
            restricted  : false
        },
        {
            type        : "nav-item",            
            text        : 'Contact Us',
            link        : '/contact-us',
            restricted  : false
        }
    ]

    const loginItems = [
        {
            type        : "btn",
            text        : "Login",
            link        : "/login",
            restricted  : false,
            exclude     : true
        },
        {
            type        : "btn",
            text        : "Sign Up",
            link        : "/register",
            restricted  : false,
            exclude     : true
        },
        {
            type        : "btn",
            text        : "Sign Out",
            link        : "/logout",
            restricted  : true,
            exclude     : false
        }
    ]

    const element = (item, i) => (
        <li key={i} className={item.type}>
            <a className="nav-link" href={item.link}>{item.text}</a>
        </li>
    )

    const login_element = (item, i) => (
        item.text === 'Sign Out' ?
            <div key={i}>
                <Link key={i} to={item.link} className={item.type} style={{backgroundColor:"#eb5834"}}>{item.text}</Link>
            </div>
        :item.text === 'Login' ?
            <Link key={i} to={item.link} className={item.type}>{item.text}&nbsp;&nbsp;</Link>
        :item.text === 'Sign Up'?
            <Link key={i} to={item.link} className={item.type} style={{backgroundColor: "#98B6D6"}}>{item.text}</Link>
        :null
    )

    const showItems = () => (
        user.login ?
            items.map((item,i) => {
                if(user.login.isAuth) {
                    return !item.exclude ?
                        element(item,i)
                    :null
                } else {
                    return !item.restricted ?
                        element(item,i)
                    :null
                }
            })
        :null
    )

    const showLoginItems = () => (
        user.login ?
            loginItems.map((item,i) => {
                if(user.login.isAuth) {
                    return !item.exclude ?
                        login_element(item,i)
                    :null
                } else {
                    return !item.restricted ?
                        login_element(item,i)
                    :null
                }
            })
        :null
    )

    return (
        <div className="collapse navbar-collapse" id="navcol-1">
            <ul className="navbar-nav ms-auto">
                {showItems()}
            </ul>
            <span className="navbar-text text-center">
                {showLoginItems()}
            </span>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(HeaderItems)
