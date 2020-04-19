import React, { Component } from 'react';
import ProfileDisplay from './ProfileDisplay';
import PostsByCreator from '../posts/PostsByCreator';
import SubmissionsByUser from '../submissions/Submissions';

class CurrentProfile extends Component {

    render() {
        if (!this.props.data.currentUser) {
            return <div>Loading...</div>
        }
        const { profile } = this.props.data.currentUser;
        return (
            <div>
                <br/>
                <ProfileDisplay profile={profile} showEdit={true}/>
                <br/>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="container">
                            <br/>
                            <PostsByCreator currentUser={true} creator={this.props.data.currentUser.id} showInProgress={true}/>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="container">
                            <br/>
                            <SubmissionsByUser user={this.props.data.currentUser.id} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CurrentProfile;
