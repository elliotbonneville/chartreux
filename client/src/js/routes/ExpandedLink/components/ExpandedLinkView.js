import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

export default function ExpandedLinkView(props) {
    const { link } = props;
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
            <Grid>
                {columns.map(colNames =>
                    <Row>
                        <Col xs={12} md={6}>
                            {colNames[0]}: {link[colNames[0]]}
                        </Col>
                        {colNames[1] ?
                            <Col xs={12} md={6}>
                                {colNames[1]}: {link[colNames[1]]}
                            </Col>
                        : null}
                    </Row>,
                )}
            </Grid>
        </div>
    );
}
