import React, { Component, Fragment } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class Answer extends Component {

    openFunc() {
        this.props.openFunc(this.props.answer);
    }

    render() {
        const { answer, isCorrect, question } = this.props.answer;
        return (
          <Fragment>
              <Card>
                  <Card.Header>
                      <Card.Title>{question.text}</Card.Title>
                      <Card.Subtitle style={{color: isCorrect ? '#80e86b' : '#F74a4a'}}>{isCorrect ? 'Correct' : 'Incorrect'}</Card.Subtitle>
                  </Card.Header>
                  <Card.Body>
                      <h6>Your response: {answer}</h6>
                      {!isCorrect && (
                        <Fragment>
                            <br/>
                            <h6>Correct answer: {question.answer}</h6>
                        </Fragment>
                      )}
                  </Card.Body>
                  {this.props.openFunc && (
                      <Card.Footer>
                        <Button style={{ color: '#4ba310' }} variant="link" onClick={this.openFunc.bind(this)}>Explore</Button>
                      </Card.Footer>
                  )}
              </Card>
              <br/>
          </Fragment>
        )
    }
}

export default Answer;
