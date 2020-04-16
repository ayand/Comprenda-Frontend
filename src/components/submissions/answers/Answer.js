import React, { Component, Fragment } from 'react';
import Card from 'react-bootstrap/Card';

class Answer extends Component {
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
              </Card>
              <br/>
          </Fragment>
        )
    }
}

export default Answer;
