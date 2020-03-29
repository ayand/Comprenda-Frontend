import React, { Component } from 'react';
import query from '../../queries/CurrentUser';
import { graphql } from 'react-apollo';

export default (WrappedComponent) => {
    class RequireAuth extends Component {
        componentDidUpdate(prevProps) {
            if (!this.props.data.currentUser) {
                this.props.history.push("/login");
            } else if (this.props.data.currentUser && !this.props.data.currentUser.profile) {
                this.props.history.push("/create_profile");
            }
        }

        render() {
            if (this.props.data.loading) {
                return <div>Loading...</div>
            }
            return <WrappedComponent {...this.props}/>;
        }
    }

    return graphql(query)(RequireAuth);
}
