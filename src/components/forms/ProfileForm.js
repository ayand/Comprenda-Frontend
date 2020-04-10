import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import query from '../../queries/CreatePost';
import { graphql } from 'react-apollo';

class ProfileForm extends Component {

    constructor(props) {
        super(props);
        this.state = { name: '', bio: '', languages: [] };
    }

    componentDidMount() {
        if (this.props.editing) {
            const { name, bio, languages } = this.props.profile;
            this.setState({ name, bio, languages })
        }
    }

    onSubmit(event) {
        event.preventDefault();
        this.state.languages.sort();
        this.props.onSubmit(this.state);
    }

    changeLanguages(language) {
        console.log(language);
        if (this.state.languages.includes(language)) {
            this.setState({ languages: this.state.languages.filter(lang => lang !== language) })
        } else {
            this.setState({ languages: this.state.languages.concat([language]) });
        }
    }

    render() {
        if (!this.props.data.languages) {
            return <p>Loading...</p>
        }
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
              <Form.Group>
                  <Form.Label><h4>Languages for Learning</h4></Form.Label>
                  {this.props.data.languages.map(({ id, language }) => <Form.Check style={{textAlign: 'left'}} key={id} id={language} label={language} onChange={(e) => this.changeLanguages(language)} checked={this.state.languages.includes(language)}/>)}
              </Form.Group>
              <Button variant="success" type="submit">Submit</Button>
          </Form>
        )
    }
}

export default graphql(query)(ProfileForm);
