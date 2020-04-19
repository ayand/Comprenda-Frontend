import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Answer from './Answer';
import PostBody from '../../posts/PostBody';

const AnswerDetail = ({ answer, body, closeFunc, show }) => {

    const close = () => {
        closeFunc();
    }

    return (
      <Modal size="lg" show={show} onHide={close}>
          <Modal.Header>
              <Modal.Title>Answer Detail</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              {answer && <Answer answer={answer}/>}
              <h3 style={{textAlign: 'center'}}>Post Passage</h3>
              <PostBody body={body}/>
          </Modal.Body>
          <Modal.Footer>
              <Button variant="success" onClick={close}>
                Close
              </Button>
          </Modal.Footer>
      </Modal>
    )
}

export default AnswerDetail;
