import React from 'react';
import { browserHistory } from 'react-router';

import { put } from '~/utils/api';
import auth from '~/data/auth';
import targetModel from '~/data/models/target';

import RecordViewContainer from '~/containers/RecordViewContainer';

const requireAuth = (nextState, replace) => {
    if (!auth.loggedIn()) {
        replace({ pathname: '/login' });
    }
};

async function createProject(data) {
    const { insertId } = (await put('/api/targets/new', data).then(response => response.json()));
    const route = `/targets/${insertId}`;
    browserHistory.push(route);
}

export default {
    path: '/projects/:projectId/targets/creating',
    component: props =>
        <RecordViewContainer
            {...props}
            editing
            recordType="target"
            titleField="url"
            onCancel={browserHistory.goBack}
            onSave={createProject}
            record={{
                ...targetModel,
                project_id: props.params.projectId,
            }}
        />,
    onEnter: requireAuth,
};
