import React, { Fragment } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Answer = ({ openFunc, answer }) => {
    const openAnswerFunc = () => {
        openFunc(answer);
    }

    const { isCorrect, question } = answer;
    const a = answer.answer;
    return (
      <Fragment>
          <Card>
              <Card.Header>
                  <Card.Title>{question.text}</Card.Title>
                  <Card.Subtitle style={{color: isCorrect ? '#80e86b' : '#F74a4a'}}>{isCorrect ? 'Correct' : 'Incorrect'}</Card.Subtitle>
              </Card.Header>
              <Card.Body>
                  <h6>Your response: {a}</h6>
                  {!isCorrect && (
                    <Fragment>
                        <br/>
                        <h6>Correct answer: {question.answer}</h6>
                    </Fragment>
                  )}
              </Card.Body>
              {openFunc && (
                  <Card.Footer>
                    <Button style={{ color: '#4ba310' }} variant="link" onClick={openAnswerFunc}>Explore</Button>
                  </Card.Footer>
              )}
          </Card>
          <br/>
      </Fragment>
    )

}

export default Answer;
