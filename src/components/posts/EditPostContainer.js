import React, { Component } from 'react';
import getPost from '../../queries/GetPost';
import { Query } from 'react-apollo';
import EditPost from './EditPost';
import { withRouter } from 'react-router-dom';

class EditPostContainer extends Component {
    render() {
        return (
            <Query query={getPost(true, true)} variables={ { id: this.props.match.params.id } }>
              {({ loading, error, data }) => {
                  if (loading) return <div>Loading...</div>;
                  if (error) return `Error! ${error}`;
                  const { post } = data;
                  return (
                      <EditPost post={post}/>
                  );
              }}
            </Query>
        )
    }
}

export default withRouter(EditPostContainer);
