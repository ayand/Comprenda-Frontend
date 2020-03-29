import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

class ProfileDisplay extends Component {
    render() {
        const { name, bio } =  this.props.profile;
        return (
          <div style={{textAlign: 'center'}}>
              <h4>Profile</h4>
              <br/>
              <Card>
                  <Card.Body>
                      <Card.Title>Name</Card.Title>
                      <Card.Text>{name}</Card.Text>
                      <Card.Title>Bio</Card.Title>
                      {bio.split(/[\r\n]/g).map((paragraph, i) => <p style={{textAlign: 'justify'}}  key={i}>{paragraph}</p>)}
                      { this.props.showEdit && <Link to="/edit_profile" className="btn btn-success">Edit Profile</Link> }
                  </Card.Body>
              </Card>
          </div>
        )
    }
}

export default ProfileDisplay;
