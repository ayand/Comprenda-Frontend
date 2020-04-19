import React, { Component } from 'react';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";


import SignupForm from '../forms/SignupForm';
import mutation from '../../mutations/Signup';
import { graphql } from 'react-apollo';
import query from '../../queries/CurrentUser';

class Signup extends Component {

    constructor(props) {
        super(props);
        this.state = { errors: [], passwordMismatchModal: false };
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

    onSubmit({ email, password, verify_password }) {
        console.log(email);
        if (password !== verify_password) {
            this.setState({ passwordMismatchModal: true });
        } else {
            this.props.mutate({
                variables: { email, password },
                refetchQueries: [{ query }]
            }).catch(res => {
                const errors = res.graphQLErrors.map(err => err.message);
                console.log(errors);
                this.setState({ errors })
            })
        }

    }

    dismissMismatchModal() {
        this.setState({ passwordMismatchModal: false });
    }

    render() {
        console.log(this.props);
        return (
            <div>
                <br/>
                <br/>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="container">
                            <h3>Make an account today to get in on the Comprenda fun today!</h3>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <SignupForm onSubmit={this.onSubmit.bind(this)}/>
                    </div>
                </div>
                <Modal show={this.state.passwordMismatchModal} onHide={this.dismissMismatchModal.bind(this)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Signup Error</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Password must match in both password fields</Modal.Body>
                    <Modal.Footer>
                        <Button variant="success" onClick={this.dismissMismatchModal.bind(this)}>
                            Ok
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default graphql(query)(graphql(mutation)(Signup));
