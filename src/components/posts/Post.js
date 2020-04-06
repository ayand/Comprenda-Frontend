import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import query from '../../queries/GetPost';
import Question from './questions/Question';

class Post extends Component {

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
                  <h4>Story</h4>
                  <div className="jumbotron" style={{backgroundColor: '#b3f786', paddingTop: '25px', paddingBottom: '25px'}}>
                      {body.split(/[\r\n]/g).map((paragraph, i) => <p style={{textAlign: 'justify'}}  key={i}>{paragraph}</p>)}
                  </div>
                  <br/>
                  <h5 style={{textAlign: 'center'}}>Questions</h5>
                  <br/>
                  {questions.map((question, i) => <Question key={question.id} question={question} index={i + 1}/>)}
              </div>
          </div>
        )
    }

}

export default graphql(query, {
  options: (props) => { return { variables: { id: props.match.params.id } } }
})(Post);
