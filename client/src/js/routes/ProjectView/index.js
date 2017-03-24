import auth from '~/data/auth';

import ExpandedProjectViewContainer from './containers/ExpandedProjectViewContainer';

const requireAuth = (nextState, replace) => {
    if (!auth.loggedIn()) {
        replace({ pathname: '/login' });
    }
};

export default {
    path: '/projects/:projectId',
    component: ExpandedProjectViewContainer,
    onEnter: requireAuth,
};
