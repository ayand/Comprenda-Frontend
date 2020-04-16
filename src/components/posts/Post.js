import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import query from '../../queries/GetPost';
import Question from './questions/Question';
import Button from 'react-bootstrap/Button';
import mutation from '../../mutations/CreateSubmission';

class Post extends Component {

    constructor(props) {
        super(props);
        this.state = { post: '', answers: [], errors: [] }
        console.log(this.state);
    }

    componentDidUpdate(prevProps) {
        if (this.props.data.post && !prevProps.data.post) {
          this.setState({ post: this.props.data.post.id })
        }
    }

    submit() {
        console.log(this.state);
        const { post, answers } = this.state;
        answers.sort((a, b) => a.question - b.question)
        //console.log()
        this.props.mutate({
            variables: { submission: { post, answers } }
        })
        .then(({ data }) => this.props.history.push(`/submissions/${data.createSubmission.id}`))
        .catch(res => {
            console.log(res);
            if (res.graphQLErrors) {
              const errors = res.graphQLErrors.map(err => err.message);
              console.log(errors);
              this.setState({ errors })
            }
        })
    }

    addQuestion(question) {
        const relevantQuestion = this.state.answers.filter(d => d.question === question.question);
        if (relevantQuestion.length === 0) {
            this.setState({ answers: this.state.answers.concat([question]) });
        } else {
            const answers = this.state.answers.slice();
            answers.filter(answer => answer.question === question.question)[0].answer = question.answer;
            this.setState({ answers })
            console.log(answers);
        }
    }

    render() {
        if (!this.props.data.post) {
            return <div>Loading...</div>
        }
        const { title, creator, body, description, questions } = this.props.data.post;
        return (
          <div>
              <br/>
              <div className="container">
                  <h3>{title}</h3>
                  <br/>
                  <h5>Created by {creator.profile.name}</h5>
                  <br/>
                  <h4>Description</h4>
                  <p>{description}</p>
                  <br/>
                  <div className="row">
                      <div className="col-lg-7">
                          <h4>Story</h4>
                          <br/>
                          <div className="jumbotron" style={{backgroundColor: '#b3f786', paddingTop: '25px', paddingBottom: '25px'}}>
                              <div style={{ height: '440px', overflowY: 'scroll' }}>
                                  {body.split(/[\r\n]/g).map((paragraph, i) => <p style={{textAlign: 'justify'}}  key={i}>{paragraph}</p>)}
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-5">
                          <h4 style={{textAlign: 'center'}}>Questions</h4>
                          <br/>
                          <div style={{ height: '500px', overflowY: 'scroll' }}>
                              {questions.map((question, i) => <Question onAnswer={this.addQuestion.bind(this)} key={question.id} question={question} index={i + 1}/>)}
                          </div>
                          <br/>
                          <Button variant="success" onClick={this.submit.bind(this)} block>Submit</Button>
                      </div>
                  </div>
              </div>
          </div>
        )
    }

}

export default graphql(mutation)(graphql(query, {
  options: (props) => { return { variables: { id: props.match.params.id } } }
})(Post));
