import React from 'react';
import { browserHistory } from 'react-router';

import { put } from '~/utils/api';
import auth from '~/data/auth';
import projectModel from '~/data/models/project';

import RecordViewContainer from '~/containers/RecordViewContainer';

const requireAuth = (nextState, replace) => {
    if (!auth.loggedIn()) {
        replace({ pathname: '/login' });
    }
};

async function createProject(data) {
    const { insertId } = (await put('/api/projects/new', data).then(response => response.json()));
    const route = `/projects/${insertId}`;
    browserHistory.push(route);
}

export default {
    path: '/projects/creating',
    component: props =>
        <RecordViewContainer
            {...props}
            editing
            recordType="project"
            titleField="project"
            onCancel={browserHistory.goBack}
            onSave={createProject}
            record={{
                ...projectModel,
                user_id: auth.getProfile().sub,
            }}
        />,
    onEnter: requireAuth,
};