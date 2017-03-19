import React from 'react';

import { Table } from 'react-bootstrap';

export default function LinksTable(props) {
    return (
        <Table striped bordered condensed hover>
            <thead>
                <tr>
                    <th>id</th>
                    <th>project</th>
                    <th>money_site</th>
                    <th>pbn_name</th>
                    <th>pbn_url</th>
                    <th>pbn_ip</th>
                    <th>article_title</th>
                    <th>article_url</th>
                    <th>author</th>
                    <th>date_added</th>
                    <th>serp_pos</th>
                    <th>keyword_1</th>
                    <th>rsos</th>
                    <th>do_follow</th>
                    <th>indexed</th>
                    <th>keyword_1_url</th>
                    <th>keyword_2</th>
                    <th>keyword_2_url</th>
                    <th>authority_url</th>
                    <th>image</th>
                    <th>video</th>
                    <th>done</th>
                    <th>interlinked</th>
                </tr>
            </thead>
            <tbody>
                {props.data.map(datum =>
                    <tr key={datum.id.toString()}>
                        <td>{datum.id}</td>
                        <td>{datum.project}</td>
                        <td>{datum.money_site}</td>
                        <td>{datum.pbn_name}</td>
                        <td>{datum.pbn_url}</td>
                        <td>{datum.pbn_ip}</td>
                        <td>{datum.article_title}</td>
                        <td>{datum.article_url}</td>
                        <td>{datum.author}</td>
                        <td>{datum.date_added}</td>
                        <td>{datum.serp_pos}</td>
                        <td>{datum.keyword_1}</td>
                        <td>{datum.rsos}</td>
                        <td>{datum.do_follow}</td>
                        <td>{datum.indexed}</td>
                        <td>{datum.keyword_1_url}</td>
                        <td>{datum.keyword_2}</td>
                        <td>{datum.keyword_2_url}</td>
                        <td>{datum.authority_url}</td>
                        <td>{datum.image}</td>
                        <td>{datum.video}</td>
                        <td>{datum.done}</td>
                        <td>{datum.interlinked}</td>
                    </tr>,
                )}
            </tbody>
        </Table>
    );
}
