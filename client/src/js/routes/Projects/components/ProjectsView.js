import React, { PropTypes } from 'react';
import { Button, Table } from 'react-bootstrap';

export default function ProjectsView(props) {
    const { projects } = props;
    const columns = Object.keys(projects[0] || [])
        .map((name, id) => ({ name, id }))
        .filter(({ name }) => name !== 'user_id');

    return (
        <div>
            <h2>Projects</h2>
            <Table striped bordered condensed hover>
                <thead>
                    <tr>
                        {columns.map(column =>
                            <th key={column.id}>{column.name}</th>,
                        )}
                    </tr>
                </thead>
                <tbody>
                    {projects.map(project =>
                        <tr key={project.id}>
                            {columns.map(column =>
                                <td key={column.id}>{project[column.name]}</td>,
                            )}
                        </tr>,
                    )}
                </tbody>
            </Table>
            <Button onClick={props.logout}>Logout</Button>
        </div>
    );
}

ProjectsView.propTypes = {
    logout: PropTypes.func.isRequired,
    projects: PropTypes.array.isRequired,
};
