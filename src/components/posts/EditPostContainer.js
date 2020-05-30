import React from 'react';
import getPost from '../../queries/GetPost';
import { Query } from 'react-apollo';
import EditPost from './EditPost';

const EditPostContainer = (props) => {
    return (
        <Query query={getPost(true, true)} variables={ { id: props.match.params.id } }>
          {({ loading, error, data }) => {
              if (loading) return <div>Loading...</div>;
              if (error) return `Error! ${error}`;
              const { post } = data;
              return (
                  <EditPost currentUser={props.data.currentUser} post={post}/>
              );
          }}
        </Query>
    )
}

export default EditPostContainer;
