import React, { Component, Fragment } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';

class ProfileDisplay extends Component {
    render() {
        const { name, bio, languages } =  this.props.profile;
        return (
          <div style={{textAlign: 'center'}}>
              <h4>Profile</h4>
              <br/>
              <Card style={{ backgroundColor: '#b3f786' }}>
                  <Card.Body>
                      <div className="row">
                          <div className="col-lg-4">
                          </div>
                          <div className="col-lg-4">
                              <Card.Title>Name</Card.Title>
                              <Card.Text>{name}</Card.Text>
                              <Card.Title>Bio</Card.Title>
                              {bio.split(/[\r\n]/g).map((paragraph, i) => <p style={{textAlign: 'justify'}}  key={i}>{paragraph}</p>)}
                          </div>
                          <div className="col-lg-4">
                              {languages.length === 0 && (
                                <Fragment>
                                  <Card.Title>No languages available</Card.Title>
                                  <Card.Text>Edit your profile to add languages</Card.Text>
                                </Fragment>
                              )}
                              {languages.length > 0 && (
                                <Fragment>
                                  <Card.Title>Languages</Card.Title>
                                  <ListGroup style={{ height: '150px', overflowY: 'scroll' }}>
                                      {languages.map((lang, i) => <ListGroup.Item style={{textAlign: 'left', backgroundColor: '#b3f786' }} key={i}>{lang}</ListGroup.Item>)}
                                  </ListGroup>
                                </Fragment>
                              )}
                          </div>
                      </div>


                      <br/>
                      { this.props.showEdit && <Link to="/edit_profile" className="btn btn-success">Edit Profile</Link> }
                  </Card.Body>
              </Card>
          </div>
        )
    }
}

export default ProfileDisplay;
