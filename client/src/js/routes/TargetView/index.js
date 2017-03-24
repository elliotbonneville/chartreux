import auth from '~/data/auth';

import ExpandedTargetViewContainer from './containers/ExpandedTargetViewContainer';

const requireAuth = (nextState, replace) => {
    if (!auth.loggedIn()) {
        replace({ pathname: '/login' });
    }
};

export default {
    path: '/projects/:projectId/targets/:targetId',
    component: ExpandedTargetViewContainer,
    onEnter: requireAuth,
};
