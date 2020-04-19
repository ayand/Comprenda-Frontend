import React, { Component } from 'react';
import getPost from '../../queries/GetPost';
import { Query } from 'react-apollo';
import EditPost from './EditPost';

class EditPostContainer extends Component {
    render() {
        return (
            <Query query={getPost(true, true)} variables={ { id: this.props.match.params.id } }>
              {({ loading, error, data }) => {
                  if (loading) return <div>Loading...</div>;
                  if (error) return `Error! ${error}`;
                  console.log(this.props.data);
                  const { post } = data;
                  return (
                      <EditPost post={post}/>
                  );
              }}
            </Query>
        )
    }
}

export default EditPostContainer;
