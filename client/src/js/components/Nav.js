import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Row } from 'react-bootstrap';

export default function Nav(props) {
    const breadcrumb = [{
        end: 'Projects',
        mid: <Link to="/projects">Projects</Link>,
        id: 0,
    }];

    const { project, target, link } = props;
    if (project) {
        breadcrumb.push({
            end: project.project,
            mid: <Link to={`/projects/${project.id}/targets`}>{project.project}</Link>,
            id: 1,
        });
    }

    if (target) {
        breadcrumb.push({
            end: target.site_name,
            mid: <Link to={`/projects/${project.id}/targets/${target.id}/links`}>{target.site_name}</Link>,
            id: 2,
        });
    }

    if (link) {
        breadcrumb.push({
            end: link.article_title,
            id: 3,
        });
    }

    return (
        <Row>
            <h4>
                {breadcrumb.map(({ end, mid, id }) => (
                    id < breadcrumb.length - 1
                        ? <span key={id}>{mid}{' > '}</span>
                        : <span key={id}>{end}</span>
                ))}
            </h4>
        </Row>
    );
}

Nav.propTypes = {
    project: PropTypes.object,
    target: PropTypes.object,
    link: PropTypes.object,
};

Nav.defaultProps = {
    project: null,
    target: null,
    link: null,
};
