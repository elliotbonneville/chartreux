import React from 'react';
import { browserHistory } from 'react-router';

import { put } from '~/utils/api';
import auth from '~/data/auth';
import Project from '~/data/models/project';

import RecordViewContainer from '~/containers/RecordViewContainer';

const requireAuth = (nextState, replace) => {
    if (!auth.loggedIn()) {
        replace({ pathname: '/login' });
    }
};

async function createProject(data) {
    const { id } = (await put('/api/projects/new', data).then(response => response.json()));
    const route = `/projects/${id}`;
    browserHistory.push(route);
}

export default {
    path: '/projects/creating',
    component: props =>
        <RecordViewContainer
            {...props}
            editing
            fields={[
                'project',
                'creation_date',
            ]}
            recordType="project"
            titleField="project"
            onCancel={browserHistory.goBack}
            onSave={createProject}
            model={Project}
            record={{
                ...Object.keys(Project).reduce(
                    (acc, key) => Object.assign(acc, { [key]: null }), {},
                ),
                user_id: auth.getProfile().sub,
            }}
        />,
    onEnter: requireAuth,
};
