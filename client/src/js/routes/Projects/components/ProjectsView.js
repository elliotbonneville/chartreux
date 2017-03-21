import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import {
    Button,
    ListGroup,
    ListGroupItem,
    Row,
    Col,
} from 'react-bootstrap';

export default function ProjectsView(props) {
    const { projects } = props;
    return (
        <div>
            <Row>
                <Col xs={6} md={3}>
                    <h2>Projects</h2>
                    <ListGroup>
                        {projects.map(project =>
                            <ListGroupItem key={project.id}>
                                <Link to={`/targets/${project.id}`}>{project.project}</Link>
                            </ListGroupItem>,
                        )}
                    </ListGroup>
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
