import auth from '~/data/auth';

import NewTargetViewContainer from './containers/NewTargetViewContainer';

const requireAuth = (nextState, replace) => {
    if (!auth.loggedIn()) {
        replace({ pathname: '/login' });
    }
};

export default {
    path: '/projects/:projectId/targets/creating',
    component: NewTargetViewContainer,
    onEnter: requireAuth,
};
