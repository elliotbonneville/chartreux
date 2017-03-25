import React from 'react';

import auth from '~/data/auth';

import RecordViewContainer from '~/containers/RecordViewContainer';

const requireAuth = (nextState, replace) => {
    if (!auth.loggedIn()) {
        replace({ pathname: '/login' });
    }
};

export default {
    path: '/projects/:projectId/targets/:targetId/links/:linkId',
    component: props =>
        <RecordViewContainer
            {...props}
            recordType="link"
            titleField="article_url"
        />,
    onEnter: requireAuth,
};
