import React from 'react';
import { Route } from 'react-router';

import { makeMainRoutes } from '~/views/routes';

const makeRoutes = () => {
    const main = makeMainRoutes();
    
    return (
        <Route path=''>
            {main}
        </Route>
    );
}

export default makeRoutes;
