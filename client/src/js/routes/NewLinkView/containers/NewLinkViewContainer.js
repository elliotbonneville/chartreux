import React, { PropTypes } from 'react';
import { browserHistory } from 'react-router';

import { put } from '~/utils/api';
import linkModel from '~/data/models/link';

import RecordViewContainer from '~/containers/RecordViewContainer';

async function createLink(data) {
    const { id } = (await put('/api/links/new', data).then(response => response.json()));
    const route = `/projects/${data.project_id}/targets/${data.target_site_id}/links/${id}`;
    browserHistory.push(route);
}

export default function NewLinkViewContainer(props) {
    return (
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
        />
    );
}

NewLinkViewContainer.propTypes = {
    params: PropTypes.object.isRequired,
};
