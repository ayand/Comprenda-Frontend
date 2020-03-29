import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

class PostCard extends Component {
    render() {
        return (
            <Card>
                <Card.Body>
                    <Card.Title>{this.props.post.title}</Card.Title>
                    <Card.Text>{this.props.post.description}</Card.Text>
                </Card.Body>
            </Card>
        )
    }
}

export default PostCard;
