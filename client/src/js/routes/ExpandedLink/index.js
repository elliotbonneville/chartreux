import auth from '~/data/auth';

import ExpandedLinkViewContainer from './containers/ExpandedLinkViewContainer';

const requireAuth = (nextState, replace) => {
    if (!auth.loggedIn()) {
        replace({ pathname: '/login' });
    }
};

export default {
    path: '/links/:linkId',
    component: ExpandedLinkViewContainer,
    onEnter: requireAuth,
};
