import '~/bootstrap';

import React from 'react';
import ReactDOM from 'react-dom';

import 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';

import { browserHistory } from 'react-router';

import AppContainer from '~/containers/AppContainer.react';

const routes = require('./routes/index').default();

ReactDOM.render(
    <AppContainer
        history={browserHistory}
        routes={routes}
    />,
    document.getElementById('app'),
);
