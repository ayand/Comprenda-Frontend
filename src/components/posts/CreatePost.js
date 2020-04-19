import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import postsQuery from '../../queries/PostsByCreator';
import mutation from '../../mutations/CreatePost';
import PostForm from '../forms/PostForm';

class CreatePost extends Component {

    constructor(props) {
        super(props);
        this.state = { errors: [] };
    }

    onSubmit(post) {
        console.log(post);
        this.props.mutate({
            variables: { post },
            refetchQueries: [{ query: postsQuery, variables: { creator: this.props.data.currentUser.id } }]
        })
        .then(() => this.props.history.push('/profile'))
        .catch(res => {
            const errors = res.graphQLErrors.map(err => err.message);
            console.log(errors);
            this.setState({ errors })
        })
    }

    /*onSubmit(event) {
        event.preventDefault();
        console.log(this.state);
        const { title, body, description, language } = this.state;
        this.props.mutate({
            variables: { title, body, description, language },
            refetchQueries: [{ query: postsQuery, variables: { creator: this.props.data.currentUser.id } }]
        })
        .then(() => this.props.history.push('/profile'))
        .catch(res => {
            const errors = res.graphQLErrors.map(err => err.message);
            console.log(errors);
            this.setState({ errors })
        })
    }*/


    render() {
        console.log(this.props.data.currentUser);
        return (
            <div>
                <br/>
                <h3 style={{textAlign: 'center'}}>Create Post</h3>
                <br/>
                <PostForm onSubmit={this.onSubmit.bind(this)}/>
            </div>
        )
    }

}

//export default graphql(mutation)(graphql(createPostQuery)(CreatePost));
export default graphql(mutation)(CreatePost);
