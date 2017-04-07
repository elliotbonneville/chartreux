import React from 'react';

import auth from '~/data/auth';
import RecordViewContainer from '~/containers/RecordViewContainer';
import linkModel from '~/data/models/link';

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
            fieldNames={linkModel}
            titleField="article_url"
        />,
    onEnter: requireAuth,
};
