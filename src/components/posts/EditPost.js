import React, { Component } from 'react';
import {graphql} from 'react-apollo';
import mutation from '../../mutations/EditPost';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import AddQuestion from './questions/AddQuestion';
import Question from './questions/Question';

class EditPost extends Component {

    constructor(props) {
        super(props);
        this.state = { title: '', body: '', description: '', errors: [], showQuestionModal: false };
    }

    componentDidMount() {
        const { title, body, description } = this.props.post;
        this.setState({ title, body, description });
    }

    onSubmit(event) {
        event.preventDefault();
        const { id } = this.props.post;
        const { title, body, description } = this.state;
        console.log(id);
        this.props.mutate({
            variables: { id, title, body, description }
        })
        .then(() => {console.log(this.props); this.props.history.push(`/posts/${id}`)})
        .catch(res => {
            console.log(res);
            if (res.graphQLErrors) {
              const errors = res.graphQLErrors.map(err => err.message);
              console.log(errors);
              this.setState({ errors })
            }
        })
    }

    openQuestionModal() {
        console.log("Open Modal");
        this.setState({ showQuestionModal: true })
    }

    closeQuestionModal() {
        this.setState({ showQuestionModal: false })
    }

    render() {
        const { id, questions } = this.props.post;
        return (
          <div className="container">
              <br/>
              <h3 style={{textAlign: 'center'}}>Edit Post</h3>
              <Form onSubmit={this.onSubmit.bind(this)}>
                  <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label><h4>Title</h4></Form.Label>
                    <Form.Control type="text" value={this.state.title} onChange={(e) => this.setState({ title: e.target.value })} />
                  </Form.Group>
                  <Form.Group controlId="exampleForm.ControlInput2">
                    <Form.Label><h4>Description</h4></Form.Label>
                    <Form.Control type="text" value={this.state.description} onChange={(e) => this.setState({ description: e.target.value })} />
                  </Form.Group>
                  <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label><h4>Body</h4></Form.Label>
                    <Form.Control as="textarea" rows="10" value={this.state.body} onChange={(e) => this.setState({ body: e.target.value })}/>
                  </Form.Group>
              </Form>
              {questions.length === 0 && <h4 style={{textAlign: 'center'}}>No questions to show currently</h4>}
              {questions.length !== 0 && <h4 style={{textAlign: 'center'}}>Questions</h4>}
              {questions.map((question, i) => <Question key={question.id} question={question} index={i + 1}/>)}
              <div style={{textAlign: 'center'}}>
                  <br/>
                  <Button variant="info" onClick={() => { this.openQuestionModal(); }}>Add Question</Button>
                  <br/>
                  <br/>
                  <Button variant="success" type="submit" onClick={this.onSubmit.bind(this)}>Submit</Button>
              </div>
              <AddQuestion id={id} show={this.state.showQuestionModal} openFunc={this.openQuestionModal.bind(this)} closeFunc={this.closeQuestionModal.bind(this)}/>
          </div>
        )
    }
}

export default graphql(mutation)(EditPost);
