import React, { Component } from 'react';
import ProfileDisplay from './ProfileDisplay';
import PostsByCreator from '../posts/PostsByCreator';
import SubmissionsByUser from '../submissions/Submissions';

const CurrentProfile = ({ data }) => {

    const { currentUser } = data;

    if (!currentUser) {
        return <div>Loading...</div>
    }
    const { profile } = currentUser;
    return (
        <div>
            <br/>
            <ProfileDisplay profile={profile} showEdit={true}/>
            <br/>
            <div className="row">
                <div className="col-lg-6">
                    <div className="container">
                        <br/>
                        <PostsByCreator currentUser={true} creator={currentUser.id} showInProgress={true}/>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="container">
                        <br/>
                        <SubmissionsByUser user={currentUser.id} />
                    </div>
                </div>
            </div>
        </div>
    )

}

export default CurrentProfile;
