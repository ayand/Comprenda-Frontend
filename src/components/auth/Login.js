import React, { Component } from 'react';

import LoginForm from '../forms/LoginForm';
import mutation from '../../mutations/Login';
import { graphql } from 'react-apollo';
import query from '../../queries/CurrentUser';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = { errors: [] };
    }

    componentDidUpdate(prevProps) {
        if (this.props.data.currentUser && !prevProps.data.currentUser) {
            // redirect to dashboard
            if (!this.props.data.currentUser.profile) {
                this.props.history.push('/create_profile');
            } else {
                this.props.history.push('/dashboard');
            }

        }
    }

    onSubmit({ email, password }) {
        //console.log(password);
        this.props.mutate({
            variables: { email, password },
            refetchQueries: [{ query }]
        }).catch(res => {
            const errors = res.graphQLErrors.map(err => err.message);
            console.log(errors);
            this.setState({ errors })
        })
    }

    render() {
        return (
            <div>
                <br/>
                <br/>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="container">
                            <h3>Log in to start testing your comprehesion skills now!</h3>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <LoginForm onSubmit={this.onSubmit.bind(this)}/>
                    </div>
                </div>

            </div>
        )
    }
}

export default graphql(query)(graphql(mutation)(Login));
