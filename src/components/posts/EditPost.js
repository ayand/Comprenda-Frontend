import React, { Component } from 'react';
import {graphql} from 'react-apollo';
import mutation from '../../mutations/EditPost';
import PostForm from '../forms/PostForm';
import {withRouter} from 'react-router-dom';
import getPost from '../../queries/GetPost';

class EditPost extends Component {

    constructor(props) {
        super(props);
        this.state = { errors: [] };
    }

    componentDidMount() {
        if (this.props.post.creator.id !== this.props.currentUser.id) {
            this.props.history.push("/not_authorized");
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.post.creator.id !== this.props.currentUser.id) {
            this.props.history.push("/not_authorized");
        }
    }

    onSubmit(post) {
        //event.preventDefault();
        console.log(post);

        const questions = post.questions.map(({id, text, answer, choices, post}) => { return {id, text, answer, choices, post} })
        const { title, body, description } = post;
        const { id } = this.props.post;
        const newPost = { id, title, body, description, questions }
        this.props.mutate({
            variables: { post: newPost },
            refetchQueries: [{ query: getPost(true), variables: { id } }]
        })
        .then(() => { this.props.history.push(`/posts/${id}`) })
        .catch(res => {
            console.log(res);
            if (res.graphQLErrors) {
              const errors = res.graphQLErrors.map(err => err.message);
              console.log(errors);
              this.setState({ errors })
            }
        })
    }

    render() {
        return (
          <div className="container">
              <br/>
              <h3 style={{textAlign: 'center'}}>Edit Post</h3>
              <PostForm post={this.props.post} onSubmit={this.onSubmit.bind(this)}/>
          </div>
        )
    }
}

//export default graphql(mutation)(EditPost);
export default withRouter(graphql(mutation)(EditPost));
