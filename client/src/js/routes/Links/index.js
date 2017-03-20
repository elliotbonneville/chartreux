import auth from '~/data/auth';

import LinksViewContainer from './containers/LinksViewContainer';

console.log('links view imported');
const requireAuth = (nextState, replace) => {
    if (!auth.loggedIn()) {
        replace({ pathname: '/login' });
    }
};

export default {
    path: '/projects/:projectId',
    component: LinksViewContainer,
    onEnter: requireAuth,
};
