import React, { PropTypes } from 'react';
import { Link, browserHistory } from 'react-router';
import { Button, Grid, Row, Glyphicon } from 'react-bootstrap';

import RecordsTable from '~/components/RecordsTable';

export default function ProjectsView(props) {
    const { projects } = props;
    const columns = Object.keys(projects[0] || []).map((name, id) => ({ name, id }));
    columns.push({ id: columns.length, name: 'edit' });

    projects.forEach((project) => {
        const editDescriptor = {
            pathname: `/projects/${project.id}`,
            query: { editing: true },
        };

        Object.assign(project, {
            project: <Link to={`/projects/${project.id}/targets`}>{project.project}</Link>,
            edit: <Link to={editDescriptor}>edit</Link>,
        });
    });

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
                <RecordsTable columns={columns} records={projects} />
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
