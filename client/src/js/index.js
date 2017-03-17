import React from 'react';
import ReactDOM from 'react-dom';

import { browserHistory } from 'react-router';
import makeRoutes from '~/routes.js';

import App from '~/app';

const routes = makeRoutes();

ReactDOM.render(
    <App history={browserHistory} routes={routes} />,
    document.getElementById('app'),
);
