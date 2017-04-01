import auth from '~/data/auth';

import NewLinkViewContainer from './containers/NewLinkViewContainer';

const requireAuth = (nextState, replace) => {
    if (!auth.loggedIn()) {
        replace({ pathname: '/login' });
    }
};

export default {
    path: '/projects/:projectId/targets/:targetId/links/creating',
    component: NewLinkViewContainer,
    onEnter: requireAuth,
};
