import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const AddQuestion = ({ onSubmit, closeFunc, show }) => {

    const [text, setText] = useState('');
    const [choices, setChoices] = useState(['', '', '', '']);
    const [answer, setAnswer] = useState('');

    const changeChoice = (index, value) => {
        const newChoices = choices.slice();
        newChoices[index] = value;
        setChoices(newChoices);
    }

    const addQuestion = (event) => {
        event.preventDefault();
        onSubmit({ text, answer, choices });
        setText('');
        setAnswer('');
        setChoices(['', '', '', '']);
        closeFunc();
    }

    return (
          <Modal show={show} onHide={closeFunc}>
              <Modal.Header closeButton>
                  <Modal.Title>Add Question</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                  <Form>
                      <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label><h4>Question</h4></Form.Label>
                        <Form.Control type="text" value={text} onChange={(e) => setText(e.target.value)} />
                      </Form.Group>
                      <h4>Answer:</h4>
                      <p>{answer}</p>
                      <h4>Choices</h4>
                      {choices.map((choice, i) => {
                          return (
                            <Form.Group as={Row}  key={i}>
                                <Col lg="1">
                                    <Form.Check type="radio" checked={answer !== '' && choice === answer} id={choice} onChange={(e) => { setAnswer(choice); }}/>
                                </Col>
                                <Col lg="11">
                                    <Form.Control type="text" value={choice} onChange={(e) => { changeChoice(i, e.target.value) }}/>
                                </Col>
                            </Form.Group>
                          )
                      })}
                  </Form>
              </Modal.Body>
              <Modal.Footer>
                  <Button variant="secondary" onClick={closeFunc}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={addQuestion}>
                    Add Question
                  </Button>
              </Modal.Footer>
          </Modal>
    )
}

export default AddQuestion;
