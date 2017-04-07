import React, { PropTypes } from 'react';
import { browserHistory } from 'react-router';
import { Button, Grid, Row, Glyphicon } from 'react-bootstrap';

import RecordsTable from '~/components/RecordsTable';

import { deleteRecord } from '~/utils/api';

export default function ProjectsView(props) {
    const archiveProject = async (id) => {
        /* eslint-disable no-alert */
        if (confirm('Are you sure you want to retire this project?')) {
            await deleteRecord('project', id);
            props.updateProject(id);
        }
        /* eslint-enable no-alert */
    };

    const { projects } = props;
    const columns = Object.keys(projects[0] || {}).map((name, id) => ({ name, id }));

    const createNewProject = async () => {
        browserHistory.push(`${window.location.pathname}/creating`);
    };

    return (
        <Grid>
            <Row style={{ paddingTop: 20 }}>
                <h2 style={{ display: 'inline' }}>Projects</h2>
                <Button bsSize="medium" style={{ marginLeft: 10 }} onClick={createNewProject}>
                    <Glyphicon glyph="plus" />
                </Button>
            </Row>
            <Row>
                <RecordsTable
                    columns={columns}
                    columnNames={{
                        project: 'Name',
                        creation_date: 'Creation Date',
                    }}
                    records={projects}
                    linkField="project"
                    getChildrenPath={project => `${window.location.pathname}/${project.id}/targets`}
                    removeRecord={archiveProject}
                />
            </Row>
            <Row>
                <Button onClick={props.logout}>Logout</Button>
            </Row>
        </Grid>
    );
}

ProjectsView.propTypes = {
    logout: PropTypes.func.isRequired,
    projects: PropTypes.array.isRequired,
};
