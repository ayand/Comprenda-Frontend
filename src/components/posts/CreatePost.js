import React, { useState } from 'react';
import { graphql } from 'react-apollo';
import postsQuery from '../../queries/PostsByCreator';
import mutation from '../../mutations/CreatePost';
import PostForm from '../forms/PostForm';

const CreatePost = ({ data, mutate, history }) => {
    const [errors, setErrors] = useState([]);
    const { currentUser } = data;

    const onSubmit = (post) => {
        mutate({
            variables: { post },
            refetchQueries: [{ query: postsQuery, variables: { creator: currentUser.id } }]
        })
        .then(() => history.push('/profile'))
        .catch(res => {
            const errs = res.graphQLErrors.map(err => err.message);
            setErrors(errs);
        })
    }

    return (
        <div>
            <br/>
            <h3 style={{textAlign: 'center'}}>Create Post</h3>
            <br/>
            <PostForm onSubmit={onSubmit}/>
        </div>
    )
}

export default graphql(mutation)(CreatePost);
