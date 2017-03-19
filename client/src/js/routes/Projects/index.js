import auth from '~/data/auth';

import ProjectsViewContainer from './containers/ProjectsViewContainer';

const requireAuth = (nextState, replace) => {
    if (!auth.loggedIn()) {
        replace({ pathname: '/login' });
    }
};

export default {
    path: '/projects',
    component: ProjectsViewContainer,
    onEnter: requireAuth,
};
