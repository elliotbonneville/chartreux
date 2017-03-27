import React, { PropTypes } from 'react';
import { browserHistory } from 'react-router';
import { Button, Row, Grid, Glyphicon } from 'react-bootstrap';

import { deleteRecord } from '~/utils/api';

import RecordsTable from '~/components/RecordsTable';

export default function TargetsView(props) {
    const createNewTarget = async () => {
        browserHistory.push(`${window.location.pathname}/creating`);
    };

    const removeTarget = async (id) => {
        /* eslint-disable no-alert */
        if (confirm('Are you sure you want to remove this target?')) {
            await deleteRecord('target', id);
            props.removeTarget(id);
        }
        /* eslint-enable no-alert */
    };

    const { targets } = props;
    const columns = Object.keys(targets[0] || []).map((name, id) => ({ name, id }));

    return (
        <Grid>
            <Row style={{ paddingTop: 20 }}>
                <h2 style={{ display: 'inline' }}>Targets</h2>
                <Button bsSize="medium" style={{ marginLeft: 10 }} onClick={createNewTarget}>
                    <Glyphicon glyph="plus" />
                </Button>
            </Row>
            <Row>
                <RecordsTable
                    columns={columns}
                    records={targets}
                    linkField="site_name"
                    getChildrenPath={target => `${window.location.pathname}/${target.id}/links`}
                    removeRecord={removeTarget}
                />
            </Row>
            <Row>
                <Button onClick={props.logout}>Logout</Button>
            </Row>
        </Grid>
    );
}

TargetsView.propTypes = {
    logout: PropTypes.func.isRequired,
    targets: PropTypes.array.isRequired,
};
