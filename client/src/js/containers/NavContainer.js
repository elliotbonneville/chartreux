import React, { PropTypes } from 'react';
import Nav from '~/components/Nav';

import { get } from '~/utils/api';

export default class NavContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            project: null,
            target: null,
            link: null,
        };
        this.getRecords(props.params);
    }

    componentWillReceiveProps(nextProps) {
        this.getRecords(nextProps.params);
    }

    async getRecords({ projectId, targetId, linkId }) {
        this.setState({
            project: typeof projectId !== 'undefined'
                ? await get(`/api/projects?projectId=${projectId}'`)
                : null,
            target: typeof targetId !== 'undefined'
                ? await get(`/api/targets?targetId=${targetId}`)
                : null,
            link: typeof linkId !== 'undefined'
                ? await get(`/api/links?linkId=${linkId}`)
                : null,
        });
    }

    render() {
        return (
            <Nav
                project={this.state.project}
                target={this.state.target}
                link={this.state.link}
            />
        );
    }
}

NavContainer.propTypes = {
    params: PropTypes.object.isRequired,
};
