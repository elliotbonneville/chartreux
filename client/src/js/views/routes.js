import React from 'react';
import { Route, IndexRedirect } from 'react-router';
import Home from '~/views/Home/Home.react';

import { Container } from '~/views/Container.react';

export const makeMainRoutes = () => {
    console.log('Rendering home component');
    return (
        <Route path="/" component={Container}>
            <IndexRedirect to="/home" />
            <Route path="home" component={Home} />
        </Route>
    );
}
