import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import {
    Button,
    Row,
    Col,
} from 'react-bootstrap';

import RecordsTable from '~/components/RecordsTable';

export default function ProjectsView(props) {
    const { projects } = props;
    const columns = Object.keys(projects[0] || []).map((name, id) => ({ name, id }));
    projects.forEach((project) => {
        Object.assign(project, {
            project: <Link to={`/projects/${project.id}/targets`}>{project.project}</Link>,
            edit: <Link to={`/projects/${project.id}`}>edit</Link>,
        });
    });
    columns.push({ id: columns.length, name: 'edit' });

    return (
        <div>
            <Row>
                <Col xs={6} md={3}>
                    <h2>Projects</h2>
                    <RecordsTable columns={columns} records={projects} />
                    <Button onClick={props.logout}>Logout</Button>
                </Col>
            </Row>
        </div>
    );
}

ProjectsView.propTypes = {
    logout: PropTypes.func.isRequired,
    projects: PropTypes.array.isRequired,
};
