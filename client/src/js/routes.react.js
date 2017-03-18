import React from 'react';
import { Route } from 'react-router';

import makeMainRoutes from '~/views/routes.react';

export default function makeRoutes() {
    const main = makeMainRoutes();

    return (
        <Route path="">
            {main}
        </Route>
    );
}
