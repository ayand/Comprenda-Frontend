import React from 'react';
import { graphql } from 'react-apollo';

import query from '../../queries/PostsByCreator';
import PostCard from './PostCard';

const PostsByCreator = ({ data, currentUser }) => {
    if (!data.postsByCreator || data.postsByCreator.length === 0) {
        return (
          <div>
              <h5>No posts to show</h5>
          </div>
        )
    }
    const { postsByCreator } = data;
    return (
      <div>
          <h4 style={{textAlign: 'center'}}>Posts</h4>
          <br/>
          <div className="container" style={{ border: '2px solid green', paddingTop: '10px', paddingBottom: '10px' }}>
              <div style={{height: '350px', overflowY: 'scroll'}}>
                  {postsByCreator.map(post => <PostCard currentUser={currentUser} key={post.id} post={post} />)}
              </div>
          </div>
      </div>
    )
}

export default graphql(query, {
  options: ({ creator, showInProgress }) => { return { variables: { creator, showInProgress } } }
})(PostsByCreator);
