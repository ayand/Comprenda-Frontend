import React, { Component } from 'react';
import { graphql } from 'react-apollo';

import query from '../../queries/CurrentUser';
import mutation from '../../mutations/EditProfile';
import ProfileForm from '../forms/ProfileForm';

class EditProfile extends Component {

    constructor(props) {
        super(props);
        this.state = { errors: [] }
    }

    componentDidUpdate(prevProps) {
        console.log(this.props.data.currentUser.profile);
        if (this.props.data.currentUser == null) {
            this.props.history.push('/login');
        } else if (this.props.data.currentUser.profile) {
            this.props.history.push('/profile');
        }
    }

    onSubmit({ name, bio, languages }) {
        console.log("Editing")
        this.props.mutate({
            variables: { name, bio, languages },
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
                    <h3>Edit Profile</h3>
                    <ProfileForm editing={true} profile={this.props.data.currentUser.profile} onSubmit={this.onSubmit.bind(this)}/>
                </div>
            </div>
        )
    }
}

export default graphql(mutation)(EditProfile);
