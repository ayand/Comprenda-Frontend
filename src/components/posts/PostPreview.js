import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { graphql } from 'react-apollo';
import getPost from '../../queries/GetPost';
import Card from 'react-bootstrap/Card';
import ReviewList from '../reviews/ReviewList';
import PostReview from '../reviews/PostReview';

class PostPreview extends Component {

    render() {
        if (!this.props.data.post) {
            return <div>Loading...</div>;
        }
        //console.log(this.props.data.post);
        const { title, description, language, creator } = this.props.data.post;
        return (
          <div className="container">
              <br/>
              <Card>
                  <Card.Header>
                      <Card.Title style={{textAlign: 'center', color: '#4ba310'}}>{title}</Card.Title>
                      <Card.Subtitle style={{textAlign: 'center'}}>Created by {creator.profile.name}</Card.Subtitle>
                  </Card.Header>
                  <Card.Body>
                      <Card.Title style={{ color: '#4ba310' }}>Description</Card.Title>
                      <Card.Subtitle>{description}</Card.Subtitle>
                      <br/>
                      <br/>
                      <Card.Title style={{ color: '#4ba310' }}>Language</Card.Title>
                      <Card.Subtitle>{language}</Card.Subtitle>
                  </Card.Body>
                  <Card.Footer style={{textAlign: 'center'}}>
                      <Link to={`/posts/${this.props.match.params.id}`} className="btn btn-success btn-lg">Start</Link>
                  </Card.Footer>
              </Card>
              <br/>
              <PostReview id={this.props.match.params.id}/>
              <ReviewList id={this.props.match.params.id}/>
          </div>
        )
    }
}

export default graphql(getPost(false), {
  options: (props) => { return { variables: { id: props.match.params.id } } }
})(PostPreview);
