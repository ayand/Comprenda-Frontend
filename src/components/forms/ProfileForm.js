import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import query from '../../queries/CreatePost';
import { graphql } from 'react-apollo';

const ProfileForm = ({ editing, profile, onSubmit, data }) => {

  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [languages, setLanguages] = useState([]);

  useEffect(() => {
      if (editing) {
          setName(profile.name);
          setBio(profile.bio);
          setLanguages(profile.languages);
      }
  }, [])

  const onProfileSubmit = (event) => {
      event.preventDefault();
      languages.sort();
      onSubmit({ name, bio, languages });
  }

  const changeLanguages = (language) => {
      if (languages.includes(language)) {
          setLanguages(languages.filter(lang => lang !== language))
      } else {
          setLanguages(languages.concat([language]))
      }
  }

  if (!data.languages) {
      return <p>Loading Create Post...</p>
  }
  return (
    <Form onSubmit={onProfileSubmit}>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label><h4>Name</h4></Form.Label>
          <Form.Control type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label><h4>Bio</h4></Form.Label>
          <Form.Control as="textarea" rows="5" placeholder="Bio" value={bio} onChange={(e) => setBio(e.target.value)}/>
        </Form.Group>
        <Form.Group>
            <Form.Label><h4>Languages for Learning</h4></Form.Label>
            {data.languages.map(({ id, language }) => <Form.Check style={{textAlign: 'left'}} key={id} id={language} label={language} onChange={(e) => changeLanguages(language)} checked={languages.includes(language)}/>)}
        </Form.Group>
        <Button variant="success" type="submit">Submit</Button>
    </Form>
  )

}

export default graphql(query)(ProfileForm);
