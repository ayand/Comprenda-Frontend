import React, { Fragment } from 'react';
import Card from 'react-bootstrap/Card';

const QuestionCard = ({ question }) => {
  const { text, answer, choices } = question;
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

export default QuestionCard;
