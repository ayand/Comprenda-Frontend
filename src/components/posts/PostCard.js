import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

class PostCard extends Component {
    render() {
        return (
            <Card>
                <Card.Body>
                    <Card.Title><Link to={`/posts/${this.props.post.id}`}>{this.props.post.title}</Link></Card.Title>
                    <Card.Text>{this.props.post.description}</Card.Text>
                    {this.props.currentUser && <Link to={`/edit_post/${this.props.post.id}`}>Edit Post</Link>}
                </Card.Body>
            </Card>
        )
    }
}

export default PostCard;
