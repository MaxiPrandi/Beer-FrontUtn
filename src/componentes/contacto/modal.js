import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './contacto.css'

function Enviado() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" type="submit" value="Enviar" className='submit w-10' onClick={handleShow}>
        Enviá tu mensaje!
    </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>The Beer</Modal.Title>
        </Modal.Header>
        <Modal.Body>Tu comentario fue enviado con exito!!!<br></br> Recibiras un E-mail a la brevedad <br></br> Muchas gracias!</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Cerrar
          </Button>

        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Enviado