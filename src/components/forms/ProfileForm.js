import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class ProfileForm extends Component {

    constructor(props) {
        super(props);
        this.state = { name: '', bio: '' };
    }

    componentDidMount() {
        if (this.props.editing) {
            const { name, bio } = this.props.profile;
            this.setState({ name, bio })
        }
    }

    onSubmit(event) {
        event.preventDefault();
        console.log(this.state);
        this.props.onSubmit(this.state);
    }

    render() {
        return (
          <Form onSubmit={this.onSubmit.bind(this)}>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label><h4>Name</h4></Form.Label>
                <Form.Control type="text" placeholder="Name" value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label><h4>Bio</h4></Form.Label>
                <Form.Control as="textarea" rows="5" placeholder="Bio" value={this.state.bio} onChange={(e) => this.setState({ bio: e.target.value })}/>
              </Form.Group>
              <Button variant="success" type="submit">Submit</Button>
          </Form>
        )
    }
}

export default ProfileForm;
