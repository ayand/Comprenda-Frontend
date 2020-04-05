import React, { Component } from 'react';
import query from '../../queries/GetPost';
import { Query } from 'react-apollo';
import EditPost from './EditPost';

class EditPostContainer extends Component {
    render() {
        return (
            <Query query={query} variables={ { id: this.props.match.params.id } }>
              {({ loading, error, data }) => {
                  if (loading) return <div>Loading...</div>;
                  if (error) return `Error! ${error}`;
                  const { post, currentUser } = data;
                  return (
                      <EditPost post={post} history={this.props.history}/>
                  );
              }}
            </Query>
        )
    }
}

export default EditPostContainer;
