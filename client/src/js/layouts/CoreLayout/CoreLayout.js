import React, { PropTypes } from 'react';
import { Grid } from 'react-bootstrap';

export default function CoreLayout(props) {
    return (
        <Grid>
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
