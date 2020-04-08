import React, { Component } from 'react';
import ProfileDisplay from './ProfileDisplay';
import Posts from '../posts/PostsByCreator';

class CurrentProfile extends Component {

    render() {
        if (!this.props.data.currentUser) {
            return <div>Loading...</div>
        }
        const { profile } = this.props.data.currentUser;
        return (
            <div>
                <br/>
                <div className="row">
                    <div className="col-lg-5">
                        <ProfileDisplay profile={profile} showEdit={true}/>
                    </div>
                    <div className="col-lg-7">
                        <div className="container">
                            <Posts currentUser={true} creator={this.props.data.currentUser.id} showInProgress={true}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CurrentProfile;
