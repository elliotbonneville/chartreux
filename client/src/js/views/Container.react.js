import React, { PropTypes } from 'react'
import { Jumbotron } from 'react-bootstrap'

export class Container extends React.Component {
    static contextTypes = {
        router: PropTypes.object
    }

    render() {
        let children = null;
        if (this.props.children) {
            children = this.props.children;

            // React.cloneElement(this.props.children, {
            //     auth: this.props.route.auth //sends auth instance to children
            // })
        }

        console.log(children);

        return (
            <Jumbotron>
                <h2 className={styles.mainTitle}>
                    <img src="https://cdn.auth0.com/styleguide/1.0.0/img/badge.svg" />
                </h2>
                {children}
            </Jumbotron>
        )
    }
}

export default Container;
