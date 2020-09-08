import React from 'react';
import { Switch } from 'react-router-dom'
import MyRoute from './MyRoute';

import Login from '../pages/Login';
import Page404 from '../pages/Page404';

function Routes() {

    return (
        <Switch>
            <MyRoute exact path='/' component={Login} />
            <MyRoute exact path='/login' component={Login} isClosed />
            <MyRoute exact path='*' component={Page404} />
        </Switch>
    );
}

export default Routes;