import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
/*import mutation from '../../../mutations/AddQuestion';
import query from '../../../queries/GetPost';*/

class AddQuestion extends Component {

    constructor(props) {
        super(props);
        this.state = { text: '', choices: ['', '', '', ''], answer: '', errorMessages: [] };
    }

    changeChoice(index, value) {
      const choices = this.state.choices.slice();
      choices[index] = value;
      this.setState({ choices })
    }

    addQuestion(event) {
        event.preventDefault();
        //console.log(this.state);
        const { text, answer, choices } = this.state;
        //const post = this.props.id;
        console.log(this.state);
        this.props.onSubmit({ text, answer, choices });
        this.setState({ text: '', answer: '', choices: ['', '', '', ''] });
        this.props.closeFunc();
        /*this.props.mutate({
            variables: { text, answer, choices, post },
            refetchQueries: [{ query, variables: { id: post } }]
        }).then(() => {
            this.setState({ text: '', answer: '', choices: ['', '', '', ''] });
            this.props.closeFunc();
        })*/
    }

    addErrorMessages(errorMessages) {
        this.setState({ errorMessages })
    }

    render() {
        return (
          <div>
              <Modal show={this.props.show} onHide={this.props.closeFunc.bind(this)}>
                  <Modal.Header closeButton>
                      <Modal.Title>Modal heading</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                      <Form>
                          <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label><h4>Question</h4></Form.Label>
                            <Form.Control type="text" value={this.state.text} onChange={(e) => this.setState({ text: e.target.value })} />
                          </Form.Group>
                          <h4>Answer:</h4>
                          <p>{this.state.answer}</p>
                          <h4>Choices</h4>
                          {this.state.choices.map((choice, i) => {
                              return (
                                <Form.Group as={Row}  key={i}>
                                    <Col lg="1">
                                        <Form.Check type="radio" checked={this.state.answer !== '' && choice === this.state.answer} id={choice} onChange={(e) => { this.setState({ answer: choice }) }}/>
                                    </Col>
                                    <Col lg="11">
                                        <Form.Control type="text" value={choice} onChange={(e) => { this.changeChoice(i, e.target.value) }}/>
                                    </Col>
                                </Form.Group>
                              )
                          })}
                      </Form>
                  </Modal.Body>
                  <Modal.Footer>
                      <Button variant="secondary" onClick={this.props.closeFunc.bind(this)}>
                        Close
                      </Button>
                      <Button variant="primary" onClick={this.addQuestion.bind(this)}>
                        Add Question
                      </Button>
                  </Modal.Footer>
              </Modal>
          </div>
        )
    }
}

//export default graphql(mutation)(AddQuestion);
export default AddQuestion;
