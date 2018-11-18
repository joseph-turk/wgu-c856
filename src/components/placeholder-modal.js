import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

const PlaceholderModal = ({ showModal, toggleModal }) => (
  <Modal isOpen={showModal} toggle={toggleModal}>
    <ModalHeader toggle={toggleModal}>Not Included</ModalHeader>

    <ModalBody>Sorry, that's not included as part of this prototype.</ModalBody>

    <ModalFooter>
      <Button color="primary" onClick={toggleModal}>
        Close
      </Button>
    </ModalFooter>
  </Modal>
)

export default PlaceholderModal
