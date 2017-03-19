import React from 'react';
import { Route, IndexRedirect } from 'react-router';

import CoreLayout from '~/layouts/CoreLayout/CoreLayout';
import Projects from '~/routes/Projects/index';
import Login from '~/routes/Login/index';

import AuthService from '~/utils/AuthService';

const auth = new AuthService('2vQd0WnQKIbKW4lWVpIs9sXaQc37GV4L', 'oxbowseo.auth0.com');

const requireAuth = (nextState, replace) => {
    if (!auth.loggedIn()) {
        replace({ pathname: '/login' });
    }
};

const preventUnneededAuth = (nextState, replace) => {
    if (auth.loggedIn()) {
        replace({ pathname: '/projects' });
    }
};

export default function createRoutes() {
    return (
        <Route path="/" component={CoreLayout} auth={auth}>
            <IndexRedirect to="/projects" />
            <Route path="projects" component={Projects.component} onEnter={requireAuth} />
            <Route path="login" component={Login.component} onEnter={preventUnneededAuth} />
        </Route>
    );
}
