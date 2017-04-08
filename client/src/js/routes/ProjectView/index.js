import React from 'react';

import auth from '~/data/auth';
import RecordViewContainer from '~/containers/RecordViewContainer';
import Project from '~/data/models/project';

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
            fields={[
                'project',
                'creation_date',
            ]}
            recordType="project"
            titleField="project"
            model={Project}
        />,
    onEnter: requireAuth,
};
