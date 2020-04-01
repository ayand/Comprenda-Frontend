import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import createPostQuery from '../../queries/CreatePost';
import postsQuery from '../../queries/PostsByCreator';
import mutation from '../../mutations/CreatePost';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class CreatePost extends Component {

    constructor(props) {
        super(props);
        this.state = { title: '', body: '', description: '', language: 'Spanish', errors: [] };
    }

    onSubmit(event) {
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
    }


    render() {
        if (!this.props.data.languages || !this.props.data.currentUser) {
            return <div>Loading...</div>
        }
        return (
            <div>
                <br/>
                <h3 style={{textAlign: 'center'}}>Create Post</h3>
                <br/>
                <div className="container">
                    <Form onSubmit={this.onSubmit.bind(this)}>
                        <Form.Group controlId="exampleForm.ControlInput1">
                          <Form.Label><h4>Title</h4></Form.Label>
                          <Form.Control type="text" value={this.state.title} onChange={(e) => this.setState({ title: e.target.value })} />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                          <Form.Label>Language</Form.Label>
                          <Form.Control as="select" value={this.state.language} onChange={(e) => this.setState({ language: e.target.value })}>
                              {this.props.data.languages.map(({ id, language }) => <option key={id} value={language}>{language}</option>)}
                          </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlInput2">
                          <Form.Label><h4>Description</h4></Form.Label>
                          <Form.Control type="text" value={this.state.description} onChange={(e) => this.setState({ description: e.target.value })} />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                          <Form.Label><h4>Body</h4></Form.Label>
                          <Form.Control as="textarea" rows="10" value={this.state.body} onChange={(e) => this.setState({ body: e.target.value })}/>
                        </Form.Group>
                        <Button variant="success" type="submit">Submit</Button>
                    </Form>
                </div>
            </div>
        )
    }

}

export default graphql(mutation)(graphql(createPostQuery)(CreatePost));
