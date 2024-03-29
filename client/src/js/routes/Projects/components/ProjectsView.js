import React, { PropTypes } from 'react';
import { browserHistory } from 'react-router';
import { Button, Row, Col, Glyphicon } from 'react-bootstrap';

import RecordsTable from '~/components/RecordsTable';

import { deleteRecord } from '~/utils/api';

import Project from '~/data/models/project';

export default function ProjectsView(props) {
    const archiveProject = async (id) => {
        /* eslint-disable no-alert */
        if (confirm('Are you sure you want to retire this project?')) {
            await deleteRecord('project', id);
            props.updateProject(id);
        }
        /* eslint-enable no-alert */
    };

    const createNewProject = async () => {
        browserHistory.push(`${window.location.pathname}/creating`);
    };

    return (
        <div>
            <Row>
                <Col xs={12} md={1}>
                    <Button bsSize="medium" onClick={createNewProject}>
                        <Glyphicon glyph="plus" />
                    </Button>
                </Col>
                <Col xs={12} md={1}>
                    <h2 style={{ display: 'inline' }}>{props.recordCount}</h2>
                </Col>
            </Row>
            <Row>
                <RecordsTable
                    columns={['project', 'creation_date']}
                    model={Project}
                    records={props.projects}
                    linkField="project"
                    getChildrenPath={project => `${window.location.pathname}/${project.id}/targets`}
                    removeRecord={archiveProject}
                />
            </Row>
            <Row>
                <Button onClick={props.logout}>Logout</Button>
            </Row>
        </div>
    );
}

ProjectsView.propTypes = {
    logout: PropTypes.func.isRequired,
    projects: PropTypes.array.isRequired,
};
