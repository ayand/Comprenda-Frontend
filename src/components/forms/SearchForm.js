import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import {withRouter} from 'react-router-dom';

class SearchForm extends Component {

    constructor(props) {
        super(props);
        this.state = { searchTerm: '' };
    }

    onSubmit(event) {
        event.preventDefault();
        const { searchTerm } = this.state;
        this.setState({ searchTerm: '' });
        console.log(searchTerm);
        this.props.history.push(`/search/${this.props.entity.toLowerCase()}/${searchTerm}`);
    }

    render() {
        return (
          <Card>
              <Card.Header>
                  <Card.Title style={{textAlign: 'center'}}>Search for {this.props.entity}</Card.Title>
              </Card.Header>
              <Card.Body>
                  <Form onSubmit={this.onSubmit.bind(this)}>
                    <Form.Group controlId="exampleForm.ControlInput1">
                      <Form.Control type="text" placeholder="Search" value={this.state.searchTerm} onChange={(e) => this.setState({ searchTerm: e.target.value })} />
                    </Form.Group>
                    <Button className="float-right" variant="success" type="submit">Search</Button>
                  </Form>
              </Card.Body>
          </Card>
        )
    }
}

export default withRouter(SearchForm);
