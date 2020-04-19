import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import createPostQuery from '../../queries/CreatePost';
import AddQuestion from './AddQuestion';
import QuestionCard from '../posts/questions/QuestionCard';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class PostForm extends Component {

    constructor(props) {
        super(props);
        this.state = { title: '', body: '', description: '', language: 'Spanish', questions: [], errors: [], showQuestionModal: false };
    }

    componentDidMount() {
        if (this.props.post) {
            const { title, body, description, questions } = this.props.post;
            this.setState({ title, body, description, questions });
        }
    }

    onSubmit(event) {
        event.preventDefault();
        //console.log(this.state);
        const { title, body, description, language, questions } = this.state;
        this.props.onSubmit({ title, body, description, language, questions });
    }

    addQuestion(question) {
        this.setState({ questions: this.state.questions.concat([question]) });
    }

    openQuestionModal() {
        console.log("Open Modal");
        this.setState({ showQuestionModal: true })
    }

    closeQuestionModal() {
        this.setState({ showQuestionModal: false })
    }

    render() {
        if (!this.props.data.languages) {
            return <div>Loading...</div>
        }
        return (
          <div>
              <br/>
              <div className="container">
                  <Form onSubmit={this.onSubmit.bind(this)}>
                      <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label><h4>Title</h4></Form.Label>
                        <Form.Control type="text" value={this.state.title} onChange={(e) => this.setState({ title: e.target.value })} />
                      </Form.Group>
                      {!this.props.post && (<Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Language</Form.Label>
                        <Form.Control as="select" value={this.state.language} onChange={(e) => this.setState({ language: e.target.value })}>
                            {this.props.data.languages.map(({ id, language }) => <option key={id} value={language}>{language}</option>)}
                        </Form.Control>
                      </Form.Group>)}
                      <Form.Group controlId="exampleForm.ControlInput2">
                        <Form.Label><h4>Description</h4></Form.Label>
                        <Form.Control type="text" value={this.state.description} onChange={(e) => this.setState({ description: e.target.value })} />
                      </Form.Group>
                      <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label><h4>Body</h4></Form.Label>
                        <Form.Control as="textarea" rows="10" value={this.state.body} onChange={(e) => this.setState({ body: e.target.value })}/>
                      </Form.Group>
                      <br/>
                      {this.state.questions.map((question, i) => <QuestionCard question={question} key={i}/>)}
                      <div style={{textAlign: 'center'}}>
                          <Button  variant="info" onClick={() => { this.openQuestionModal(); }}>Add Question</Button>
                      </div>
                      <br/>
                      <Button variant="success" type="submit" block>Submit</Button>
                      <br/>
                  </Form>
                  <AddQuestion onSubmit={this.addQuestion.bind(this)} show={this.state.showQuestionModal} openFunc={this.openQuestionModal.bind(this)} closeFunc={this.closeQuestionModal.bind(this)}/>
              </div>
          </div>
        )
    }
}

export default graphql(createPostQuery)(PostForm);
