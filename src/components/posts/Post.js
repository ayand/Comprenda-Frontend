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
                              {questions.map((question, i) => <Question key={question.id} question={question} index={i + 1}/>)}
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        )
    }

}

export default graphql(query, {
  options: (props) => { return { variables: { id: props.match.params.id } } }
})(Post);
