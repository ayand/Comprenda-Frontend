import React, { useState, useEffect } from 'react';
import { graphql } from 'react-apollo';
import createPostQuery from '../../queries/CreatePost';
import AddQuestion from './AddQuestion';
import QuestionCard from '../posts/questions/QuestionCard';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const PostForm = ({ post, onSubmit, data }) => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [description, setDescription] = useState('');
    const [language, setLanguage] = useState('Spanish');
    const [questions, setQuestions] = useState([]);
    const [showQuestionModal, setShowQuestionModal] = useState(false);

    useEffect(() => {
        if (post) {
            setTitle(post.title);
            setBody(post.body);
            setDescription(post.description);
            setQuestions(post.questions);
        }
    }, [])

    const onPostSubmit = (event) => {
        event.preventDefault();
        console.log("Submitting Post!");
        onSubmit({ title, body, description, language, questions });
    }

    const addQuestion = (question) => {
        setQuestions(questions.concat([question]));
    }

    const openQuestionModal = () => {
        console.log("Open Modal");
        setShowQuestionModal(true);
    }

    const closeQuestionModal = () => {
        setShowQuestionModal(false);
    }

    if (!data.languages) {
        return <div>Loading...</div>
    }
    return (
      <div>
          <br/>
          <div className="container">
              <Form onSubmit={onPostSubmit}>
                  <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label><h4>Title</h4></Form.Label>
                    <Form.Control type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                  </Form.Group>
                  {!post && (<Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Language</Form.Label>
                    <Form.Control as="select" value={language} onChange={(e) => setLanguage(e.target.value)}>
                        {data.languages.map(({ id, language }) => <option key={id} value={language}>{language}</option>)}
                    </Form.Control>
                  </Form.Group>)}
                  <Form.Group controlId="exampleForm.ControlInput2">
                    <Form.Label><h4>Description</h4></Form.Label>
                    <Form.Control type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
                  </Form.Group>
                  <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label><h4>Body</h4></Form.Label>
                    <Form.Control as="textarea" rows="10" value={body} onChange={(e) => setBody(e.target.value)}/>
                  </Form.Group>
                  <br/>
                  {questions.map((question, i) => <QuestionCard question={question} key={i}/>)}
                  <div style={{textAlign: 'center'}}>
                      <Button  variant="info" onClick={() => { openQuestionModal(); }}>Add Question</Button>
                  </div>
                  <br/>
                  <Button variant="success" type="submit" block>Submit</Button>
                  <br/>
              </Form>
              <AddQuestion onSubmit={addQuestion} show={showQuestionModal} openFunc={openQuestionModal} closeFunc={closeQuestionModal}/>
          </div>
      </div>
    )
}

export default graphql(createPostQuery)(PostForm);
