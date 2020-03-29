import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import CardDeck from 'react-bootstrap/CardDeck';

import query from '../../queries/PostsByCreator';
import PostCard from './PostCard';

class Posts extends Component {

    render() {
        console.log(this.props.creator);
        if (!this.props.data.postsByCreator || this.props.data.postsByCreator.length === 0) {
            return (
              <div>
                  <h5>No posts to show</h5>
              </div>
            )
        }
        const { postsByCreator } = this.props.data;
        return (
          <div>
              <h4 style={{textAlign: 'center'}}>Posts</h4>
              <br/>
              <div style={{ height: '500px', overflowY: 'scroll' }}>
                  {postsByCreator.map(post => <PostCard key={post.id} post={post} />)}
              </div>
          </div>
        )
    }

}

export default graphql(query, {
  options: ({ creator }) => { return { variables: { creator } } }
})(Posts);
