import React, { PropTypes } from 'react';
import { Link, browserHistory } from 'react-router';
import { Button, Row, Grid, Glyphicon } from 'react-bootstrap';

import RecordsTable from '~/components/RecordsTable';

export default function TargetsView(props) {
    const { targets } = props;
    const columns = Object.keys(targets[0] || []).map((name, id) => ({ name, id }));
    targets.forEach((target) => {
        const editDescriptor = {
            pathname: `/projects/${target.project_id}/targets/${target.id}`,
            query: { editing: true },
        };

        Object.assign(target, {
            site_name: <Link to={`/projects/${target.project_id}/targets/${target.id}/links`}>{target.site_name}</Link>,
            edit: <Link to={editDescriptor}>edit</Link>,
        });
    });
    columns.push({ id: columns.length, name: 'edit' });

    const createNewTarget = async () => {
        browserHistory.push(`${window.location.pathname}/creating`);
    };

    return (
        <Grid>
            <Row style={{ paddingTop: 20 }}>
                <h2 style={{ display: 'inline' }}>Targets</h2>
                <Button bsSize="medium" style={{ marginLeft: 10 }} onClick={createNewTarget}>
                    <Glyphicon glyph="plus" />
                </Button>
            </Row>
            <Row>
                <RecordsTable columns={columns} records={targets} />
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
