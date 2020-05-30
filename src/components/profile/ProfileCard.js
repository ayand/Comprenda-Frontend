import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

const ProfileCard = ({ profile }) => {
    return (
      <Card>
          <Card.Body>
              <Card.Title>{profile.name}</Card.Title>
              <Card.Subtitle>Learning {profile.languages.join(",")}</Card.Subtitle>
          </Card.Body>
      </Card>
    )
}

export default ProfileCard;
