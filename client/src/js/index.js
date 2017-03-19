/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';

import '~/app';

import App from '~/containers/app/App.react';

import { browserHistory } from 'react-router';
import makeRoutes from '~/routes.react';

const routes = makeRoutes();

ReactDOM.render(
    <App
        history={browserHistory}
        routes={routes}
    />,
    document.getElementById('app'),
);
