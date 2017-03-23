import auth from '~/data/auth';

import TargetsViewContainer from './containers/TargetsViewContainer';

const requireAuth = (nextState, replace) => {
    if (!auth.loggedIn()) {
        replace({ pathname: '/login' });
    }
};

export default {
    path: '/projects/:projectId/targets',
    component: TargetsViewContainer,
    onEnter: requireAuth,
};
