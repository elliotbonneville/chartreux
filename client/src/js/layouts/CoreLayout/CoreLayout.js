import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Grid } from 'react-bootstrap';

export default function CoreLayout(props) {
    return (
        <Grid>
            <Link to="/projects/">Home</Link>
            {props.children}
        </Grid>
    );
}

CoreLayout.propTypes = {
    children: PropTypes.object,
};

CoreLayout.defaultProps = {
    children: {},
};
