import React from 'react';
import { Button, Grid, Row } from 'react-bootstrap';

import LinkProperty from './LinkProperty';

export default function ExpandedLinkView(props) {
    const { link, editing, modifyLink, toggleEditMode } = props;
    const fields = Object.keys(link);
    const columns = fields.reduce((acc, cur, i) => {
        if (i % 2 === 0) {
            return acc.concat([[cur]]);
        }

        acc[acc.length - 1].push(cur);
        return acc;
    }, []);

    return (
        <div>
            <h2>{link.article_url}</h2>
            <Button onClick={toggleEditMode}>
                {editing ? 'Save' : 'Edit'}
            </Button>
            <Grid>
                {columns.map(colNames =>
                    <Row>
                        <LinkProperty
                            property={colNames[0]}
                            value={link[colNames[0]]}
                            editing={editing}
                            modifyLink={modifyLink}
                        />
                        <LinkProperty
                            property={colNames[1]}
                            value={link[colNames[1]]}
                            editing={editing}
                            modifyLink={modifyLink}
                        />
                    </Row>,
                )}
            </Grid>
        </div>
    );
}
