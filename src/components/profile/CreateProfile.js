import React, { Component } from 'react';
import { graphql } from 'react-apollo';

import query from '../../queries/CurrentUser';
import mutation from '../../mutations/CreateProfile';
import ProfileForm from '../forms/ProfileForm';

class CreateProfile extends Component {

    constructor(props) {
        super(props);
        this.state = { errors: [] };
    }

    componentDidUpdate(prevProps) {
        if (!this.props.data.currentUser) {
            this.props.history.push('/login');
        } else if (this.props.data.currentUser.profile && !prevProps.data.currentUser.profile) {
            // redirect to dashboard
            this.props.history.push('/dashboard');
        }
    }

    onSubmit({ name, bio }) {
        console.log(name);
        console.log(bio);
        this.props.mutate({
            variables: { name, bio },
            refetchQueries: [{ query }]
        }).catch(res => {
            const errors = res.graphQLErrors.map(err => err.message);
            console.log(errors);
            this.setState({ errors })
        })
    }

    render() {
        if (!this.props.data.currentUser) {
            return <div>Logging out</div>
        }
        return (
            <div style={{textAlign: 'center'}}>
                <br/>
                <br/>
                <div className="container">
                    <h3>Create Profile</h3>
                    <ProfileForm editing={false} onSubmit={this.onSubmit.bind(this)}/>
                </div>

            </div>
        )
    }
}

export default graphql(query)(graphql(mutation)(CreateProfile));
