import React, { Component, Fragment } from 'react';
import Card from 'react-bootstrap/Card';

class QuestionCard extends Component {
    render() {
        const { text, answer, choices } = this.props.question;
        return (
          <Fragment>
              <Card>
                  <Card.Header>
                      <Card.Title>{text}</Card.Title>
                  </Card.Header>
                  <div className="container">
                      <br/>
                      <Card.Subtitle>Answer: {answer}</Card.Subtitle>
                      <Card.Body>
                          <ul>
                              {choices.map((choice, i) => <li key={i}>{choice}</li>)}
                          </ul>
                      </Card.Body>
                  </div>
              </Card>
              <br/>
          </Fragment>
        )
    }
}

export default QuestionCard;
