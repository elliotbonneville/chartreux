import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Button, Row, Col } from 'react-bootstrap';

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
