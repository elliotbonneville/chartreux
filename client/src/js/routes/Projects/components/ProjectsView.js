import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import {
    Button,
    ListGroup,
    ListGroupItem,
} from 'react-bootstrap';

export default function ProjectsView(props) {
    const { projects } = props;
    return (
        <div>
            <h2>Projects</h2>
            <ListGroup>
                {projects.map(project =>
                    <ListGroupItem key={project.id}>
                        <Link to={`/targets/${project.id}`}>{project.project}</Link>
                    </ListGroupItem>,
                )}
            </ListGroup>
            <Button onClick={props.logout}>Logout</Button>
        </div>
    );
}

ProjectsView.propTypes = {
    logout: PropTypes.func.isRequired,
    projects: PropTypes.array.isRequired,
};
