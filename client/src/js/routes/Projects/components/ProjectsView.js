import React, { PropTypes } from 'react';
import { Button } from 'react-bootstrap';

export default function ProjectsView(props) {
    return (
        <div>
            <h2>Projects</h2>
            <div>{props.projects}</div>
            <Button onClick={props.logout}>Logout</Button>
        </div>
    );
}

ProjectsView.propTypes = {
    logout: PropTypes.func.isRequired,
    projects: PropTypes.array.isRequired,
};
