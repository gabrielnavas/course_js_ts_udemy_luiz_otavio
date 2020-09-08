import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import Page404 from '../pages/Page404';

function routes({ component: Component, isClosed, ...rest }) {

    const isLoggedId = false;

    if(isClosed) {
        return (
            <Route {...rest} component={Page404} />
        )
    }

    if (isClosed || !isLoggedId) {
        return (
            <Redirect
                to={{
                    pathname: '/login',
                    state: { prevPath: rest.location.pathname }
                }}
            />
        )
    }

    return (
        <Route {...rest} component={Component} />
    );
}

export default routes;