import React, { PropTypes } from 'react';
import { browserHistory } from 'react-router';
import { Button, Row, Col, Glyphicon } from 'react-bootstrap';

import { deleteRecord } from '~/utils/api';

import RecordsTable from '~/components/RecordsTable';
import Target from '~/data/models/target';

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

    return (
        <div>
            <Row>
                <Col xs={12} md={1}>
                    <Button bsSize="medium" onClick={createNewTarget}>
                        <Glyphicon glyph="plus" />
                    </Button>
                </Col>
                <Col xs={12} md={1}>
                    <h2 style={{ display: 'inline' }}>{props.recordCount}</h2>
                </Col>
            </Row>
            <Row>
                <RecordsTable
                    columns={['site_name', 'url', 'site_host', 'site_type', 'desc']}
                    model={Target}
                    records={targets}
                    linkField="site_name"
                    getChildrenPath={target => `${window.location.pathname}/${target.id}/links`}
                    removeRecord={removeTarget}
                />
            </Row>
            <Row>
                <Button onClick={props.logout}>Logout</Button>
            </Row>
        </div>
    );
}

TargetsView.propTypes = {
    logout: PropTypes.func.isRequired,
    targets: PropTypes.array.isRequired,
    recordCount: PropTypes.number.isRequired,
    removeTarget: PropTypes.func.isRequired,
};
