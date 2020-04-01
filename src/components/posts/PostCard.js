import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

class PostCard extends Component {
    render() {
        return (
            <Card>
                <Card.Body>
                    <Card.Title><Link to={`/posts/${this.props.post.id}`}>{this.props.post.title}</Link></Card.Title>
                    <Card.Text>{this.props.post.description}</Card.Text>
                </Card.Body>
            </Card>
        )
    }
}

export default PostCard;
