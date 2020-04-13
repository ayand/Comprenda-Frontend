import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import query from '../../queries/SubmissionsByUser';
import SubmissionCard from './SubmissionCard';

class Submissions extends Component {
    render() {
        const { submissionsByUser } = this.props.data;
        if (!submissionsByUser) {
            return <div>Loading...</div>
        }
        console.log(submissionsByUser);
        return (
          <div>
              <h4 style={{textAlign: 'center'}}>Submissions</h4>
              <br/>
              <div className="container" style={{ border: '2px solid green', paddingTop: '10px', paddingBottom: '10px' }}>
                  <div style={{ height: '350px', overflowY: 'scroll' }}>
                      {submissionsByUser.map((submission) => <SubmissionCard submission={submission} key={submission.id}/>)}
                  </div>
              </div>
          </div>
        )
    }
}

export default graphql(query, {
  options: ({ user }) => { return { variables: { user } } }
})(Submissions);
