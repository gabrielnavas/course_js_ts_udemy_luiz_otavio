import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import Page404 from '../pages/Page404';

function MyRoute({ component: Component, isClosed, ...rest }) {

    const isLoggedId = false;

    if ( isClosed && !isLoggedId ) {
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

export default MyRoute;

MyRoute.propTypes = {
    isClosed: false,
}

MyRoute.propTypes = {
    component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
    isClosed: PropTypes.bool,
}