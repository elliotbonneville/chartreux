import React, { PropTypes } from 'react';
import { Grid } from 'react-bootstrap';

import NavContainer from '~/containers/NavContainer';

export default function CoreLayout(props) {
    return (
        <div>
            <Grid>
                <NavContainer params={props.params} />
                {props.children}
            </Grid>
        </div>
    );
}

CoreLayout.propTypes = {
    children: PropTypes.object,
    params: PropTypes.object.isRequired,
};

CoreLayout.defaultProps = {
    children: {},
};
