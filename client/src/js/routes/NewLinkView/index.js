import React from 'react';
import { browserHistory } from 'react-router';

import { put } from '~/utils/api';
import auth from '~/data/auth';
import linkModel from '~/data/models/link';

import RecordViewContainer from '~/containers/RecordViewContainer';

const requireAuth = (nextState, replace) => {
    if (!auth.loggedIn()) {
        replace({ pathname: '/login' });
    }
};

async function createLink(data) {
    const { insertId } = (await put('/api/links/new', data).then(response => response.json()));
    const route = `/projects/${data.project_id}/targets/${data.target_site_id}/links/${insertId}`;
    browserHistory.push(route);
}

export default {
    path: '/projects/:projectId/targets/:targetId/links/creating',
    component: props =>
        <RecordViewContainer
            {...props}
            editing
            recordType="link"
            titleField="article_url"
            onCancel={browserHistory.goBack}
            onSave={createLink}
            record={{
                ...linkModel,
                project_id: props.params.projectId,
                target_site_id: props.params.targetId,
            }}
        />,
    onEnter: requireAuth,
};
