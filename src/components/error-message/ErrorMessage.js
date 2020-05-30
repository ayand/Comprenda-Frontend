import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ErrorMessage = ({ closeFunc, show, errors }) => {

    const dismissMismatchModal = () => {
        console.log("Closing!");
        closeFunc();
    }

    return (
      <Modal show={show} onHide={dismissMismatchModal}>
          <Modal.Header closeButton>
              <Modal.Title style={{textAlign: 'center'}}>Error Message</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              {errors.map((error, i) => { return <p key={i}>{error}</p> })}
          </Modal.Body>
          <Modal.Footer>
              <Button block variant="success" onClick={dismissMismatchModal}>
                  Ok
              </Button>
          </Modal.Footer>
      </Modal>
    )
}

export default ErrorMessage;
