import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

class ProfileCard extends Component {
    render() {
        return (
          <Card>
              <Card.Body>
                  <Card.Title>{this.props.profile.name}</Card.Title>
                  <Card.Subtitle>Learning {this.props.profile.languages.join(",")}</Card.Subtitle>
              </Card.Body>
          </Card>
        )
    }
}

export default ProfileCard;
