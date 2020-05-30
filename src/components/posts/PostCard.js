import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const PostCard = ({ post, currentUser }) => {
    return (
        <Card>
            <Card.Body>
                <Card.Title><Link style={{ color: '#4ba310' }} to={`/posts/preview/${post.id}`}>{post.title}</Link></Card.Title>
                <Card.Text>{post.description}</Card.Text>
                {currentUser && <Link style={{ color: '#4ba310' }} to={`/edit_post/${post.id}`}>Edit Post</Link>}
            </Card.Body>
        </Card>
    )
}

export default PostCard;
