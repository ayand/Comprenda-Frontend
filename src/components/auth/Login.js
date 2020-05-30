import React, { Component } from 'react';

import LoginForm from '../forms/LoginForm';
import ErrorMessage from '../error-message/ErrorMessage';
import mutation from '../../mutations/Login';
import { graphql } from 'react-apollo';
import query from '../../queries/CurrentUser';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = { showModal: false, errors: [] };
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

    openModal() {
        console.log("Opening modal")
        this.setState({ showModal: true });
    }

    closeModal() {
        this.setState({ showModal: false });
    }

    onSubmit({ email, password }) {
        //console.log(password);
        this.props.mutate({
            variables: { email, password },
            refetchQueries: [{ query }]
        }).catch(res => {
            if (res.graphQLErrors) {
              const errors = res.graphQLErrors.map(err => err.message);
              console.log(errors);
              this.setState({ errors }, () => {
                  this.openModal();
              })
            }
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
                <ErrorMessage errors={this.state.errors} show={this.state.showModal} closeFunc={this.closeModal.bind(this)}/>
            </div>
        )
    }
}

//const Login = ()

export default graphql(query)(graphql(mutation)(Login));
