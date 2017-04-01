import React, { PropTypes } from 'react';
import { browserHistory } from 'react-router';

import { put } from '~/utils/api';
import targetModel from '~/data/models/target';

import RecordViewContainer from '~/containers/RecordViewContainer';

async function createProject(data) {
    const { insertId } = (await put('/api/targets/new', data).then(response => response.json()));
    const route = `/targets/${insertId}`;
    browserHistory.push(route);
}

export default function NewTargetViewContainer(props) {
    return (
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
        />
    );
}

NewTargetViewContainer.propTypes = {
    params: PropTypes.object.isRequired,
};
