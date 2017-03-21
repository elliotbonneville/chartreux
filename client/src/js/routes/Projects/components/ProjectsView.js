import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import {
    Button,
    ListGroup,
    ListGroupItem,
    Grid,
    Row,
    Col,
} from 'react-bootstrap';

export default function ProjectsView(props) {
    const { projects } = props;
    return (
        <div>
            <Grid>
                <Row>
                    <Col xs={6} md={4} />
                    <Col xs={6} md={4}>
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
            </Grid>
        </div>
    );
}

ProjectsView.propTypes = {
    logout: PropTypes.func.isRequired,
    projects: PropTypes.array.isRequired,
};
