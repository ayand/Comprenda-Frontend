import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';

/*class Question extends Component {

    constructor(props) {
        super(props);
        this.state = { answer: '' };
    }

    answerQuestion(answer) {
        this.props.onAnswer({ question: this.props.question.id, answer });
        this.setState({ answer });
    }

    render() {
        const { question, index } = this.props;
        const { text, choices } = question;
        return (
            <div className="jumbotron" style={{backgroundColor: '#cefab1', border: '3px solid #4ba310', paddingTop: '25px', paddingBottom: '25px'}}>
                <h5>{index}. {text}</h5>
                <Form>
                    <fieldset>
                        <Form.Group value={this.state.answer}>
                            {choices.map((choice, i) => (
                              <Form.Check type="radio" checked={choice === this.state.answer} key={i} id={choice} label={choice} onChange={(e) => { this.answerQuestion(choice); }}/>
                            ))}
                        </Form.Group>
                    </fieldset>
                </Form>
            </div>
        );
    }

}*/

const Question = ({ onAnswer, question, index }) => {

  const [answer, setAnswer] = useState('');

  const answerQuestion = (a) => {
      onAnswer({ question: question.id, answer: a });
      setAnswer(a);
  }

  const { text, choices } = question;
  return (
      <div className="jumbotron" style={{backgroundColor: '#cefab1', border: '3px solid #4ba310', paddingTop: '25px', paddingBottom: '25px'}}>
          <h5>{index}. {text}</h5>
          <Form>
              <fieldset>
                  <Form.Group value={answer}>
                      {choices.map((choice, i) => (
                        <Form.Check type="radio" checked={choice === answer} key={i} id={choice} label={choice} onChange={(e) => { answerQuestion(choice); }}/>
                      ))}
                  </Form.Group>
              </fieldset>
          </Form>
      </div>
  );

}

export default Question;
