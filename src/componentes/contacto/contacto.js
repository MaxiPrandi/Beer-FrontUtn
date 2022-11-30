import React, { useRef } from "react";
import "./contacto.css";
import { Container, Col, Row } from "react-bootstrap";
import emailjs from "emailjs-com";
import gif from "../assests/cheers.gif";

function alerta() {
  alert("Tu comentario fue enviado con exito!!!");
}

export const Contacto = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2zcctfm",
        "template_o7f4u2o",
        e.target,
        "zdNWE3HbYMhBZwyXA"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Container fluid>
      <Row className="mainForm">
        <Col xs="10" sm="4" md="3">
          <div className="gif">
            <img src={gif} alt="gif" />
          </div>
        </Col>
        <Col xs="12" sm="10" md="4">
          <form ref={form} onSubmit={sendEmail} className="formRegistro">
            <h1 className="text-light text-center">Contacto</h1>
            <input
              type="text"
              placeholder="Nombre"
              className="input"
              name="nombre"
              required
            />
            <input
              type="text"
              placeholder="Apellido"
              className="input"
              name="apellido"
              required
            />
            <input
              type="email"
              placeholder="E-mail"
              className="input"
              name="email"
              required
            />
            <textarea
              type="text"
              placeholder="Mensaje"
              className="input"
              name="mensaje"
              cols="40"
              rows="5"
              required
            />
            <input
              type="submit"
              value="Enviar mensaje"
              className="submit"
              onClick={alerta}
            />
          </form>
        </Col>
        <Col xs="10" sm="4" md="3">
          <div className="gif">
            <img src={gif} alt="gif" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contacto;
