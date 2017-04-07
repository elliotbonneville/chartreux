import React from 'react';

import auth from '~/data/auth';
import RecordViewContainer from '~/containers/RecordViewContainer';
import projectModel from '~/data/models/project';

const requireAuth = (nextState, replace) => {
    if (!auth.loggedIn()) {
        replace({ pathname: '/login' });
    }
};

export default {
    path: '/projects/:projectId',
    component: props =>
        <RecordViewContainer
            {...props}
            recordType="project"
            titleField="project"
            fieldNames={projectModel}
        />,
    onEnter: requireAuth,
};
