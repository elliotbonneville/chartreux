import React from 'react';

import auth from '~/data/auth';
import RecordViewContainer from '~/containers/RecordViewContainer';
import targetModel from '~/data/models/target';

const requireAuth = (nextState, replace) => {
    if (!auth.loggedIn()) {
        replace({ pathname: '/login' });
    }
};

export default {
    path: '/projects/:projectId/targets/:targetId',
    component: props =>
        <RecordViewContainer
            {...props}
            recordType="target"
            titleField="url"
            fieldNames={targetModel}
        />,
    onEnter: requireAuth,
};
