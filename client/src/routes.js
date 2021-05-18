import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Auth from './hoc/Auth/index';

import Layout   from './hoc/Layout/index';
import Home     from './components/Home/index';
import Register from './components/Register/index';
import Login    from './components/Login/index';
import Logout   from './components/Logout/index';
import SalonView    from './components/Salons/index';

class Routes extends Component {
    render() {
        return (
            <Layout>
                <Switch>
                    <Route path="/"             exact component={ Auth(Home,        null ) }/>
                    <Route path="/register"     exact component={ Auth(Register,    false) }/>
                    <Route path="/login"        exact component={ Auth(Login,       false) }/>
                    <Route path="/logout"       exact component={ Auth(Logout,      true ) }/>
                    <Route path="/salons/:id"   exact component={ Auth(SalonView,   null ) }/>
                </Switch>
            </Layout>
        )
    }
}

export default Routes;