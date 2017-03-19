import auth from '~/data/auth';

import Login from './components/Login.react';

const preventUnneededAuth = (nextState, replace) => {
    if (auth.loggedIn()) {
        replace({ pathname: '/projects' });
    }
};

export default {
    path: '/login',
    component: Login,
    // onEnter: preventUnneededAuth,
};
