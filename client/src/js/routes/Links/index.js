import auth from '~/data/auth';

import LinksViewContainer from './containers/LinksViewContainer';

const requireAuth = (nextState, replace) => {
    if (!auth.loggedIn()) {
        replace({ pathname: '/login' });
    }
};

export default {
    path: '/projects/:projectId/targets/:targetId/links',
    component: LinksViewContainer,
    onEnter: requireAuth,
};
