import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { useHistory } from "react-router-dom";

const SearchForm = ({ entity }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const history = useHistory();

    const onSubmit = (event) => {
        event.preventDefault();
        history.push(`/search/${entity.toLowerCase()}/${searchTerm}`);
    }

    return (
      <Card>
          <Card.Header>
              <Card.Title style={{textAlign: 'center'}}>Search for {entity}</Card.Title>
          </Card.Header>
          <Card.Body>
              <Form onSubmit={onSubmit}>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Control type="text" placeholder="Search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                </Form.Group>
                <Button className="float-right" variant="success" type="submit">Search</Button>
              </Form>
          </Card.Body>
      </Card>
    )
}

export default SearchForm;
