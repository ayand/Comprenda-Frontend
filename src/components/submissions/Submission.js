import React, { Component } from 'react';
import query from '../../queries/GetSubmission';
import { graphql } from 'react-apollo';
import SubmissionScore from './SubmissionScore';
import Answer from './answers/Answer';
import AnswerDetail from './answers/AnswerDetail';

class Submission extends Component {

    constructor(props) {
        super(props);
        this.state = { currentAnswer: null, showModal: false };
    }

    open() {
        this.setState({ showModal: true });
    }

    close() {
        this.setState({ showModal: false });
    }

    showAnswer(currentAnswer) {
        this.setState({ currentAnswer });
        this.open();
    }

    componentDidMount() {
        if (this.props.data.submission) {
            this.chart = new SubmissionScore(this.svg, this.props.data.submission.score, 200);
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.data.submission) {
            this.chart = new SubmissionScore(this.svg, this.props.data.submission.score, 200);
        }
    }

    /*shouldComponentUpdate(nextProps, nextState) {
        return true;
    }*/

    render() {
        if (!this.props.data.submission) {
            return <div>Loading...</div>
        }
        const d = new Date(this.props.data.submission.submissionTime);
        console.log("Rendered");
        return (
          <div>
              <br/>
                  <div style={{textAlign: 'center'}}>
                      <h3>{this.props.data.submission.post.title}</h3>
                      <h4>Score:</h4>
                      <svg width="200" height="200" ref={svg => this.svg = svg} />
                      <br/>
                      <br/>
                      <h5>Submitted on {`${d.getMonth()+1}/${d.getDate()}/${d.getFullYear()} ${d.getHours()}:${(d.getMinutes() >= 10) ? d.getMinutes() : ("0" + d.getMinutes())}`}</h5>
                      <br/>
                  </div>
                  <div className="container">
                      {this.props.data.submission.answers.map((answer) => { return <Answer key={answer.id} answer={answer} openFunc={this.showAnswer.bind(this)}/> })}
                  </div>
                  <AnswerDetail answer={this.state.currentAnswer} body={this.props.data.submission.post.body} show={this.state.showModal} closeFunc={this.close.bind(this)}/>
              <br/>
          </div>
        )
    }
}

export default graphql(query, {
  options: (props) => { return { variables: { id: props.match.params.id } } }
})(Submission);
