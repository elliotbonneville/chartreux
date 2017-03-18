import React from 'react';
import { Route, IndexRedirect } from 'react-router';

import Container from '~/views/Container.react';
import Home from '~/views/home/Home.react';
import Login from '~/views/login/Login.react';

import AuthService from '~/utils/AuthService';

const auth = new AuthService('2vQd0WnQKIbKW4lWVpIs9sXaQc37GV4L', 'oxbowseo.auth0.com');

const requireAuth = (nextState, replace) => {
    if (!auth.loggedIn()) {
        replace({ pathname: '/login' });
    }
};

export default function makeMainRoutes() {
    return (
        <Route path="/" component={Container} auth={auth}>
            <IndexRedirect to="/home" />
            <Route path="home" component={Home} onEnter={requireAuth} />
            <Route path="login" component={Login} />
        </Route>
    );
}
