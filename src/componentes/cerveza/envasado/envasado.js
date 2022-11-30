import React from "react";
import "../cerveza.css";
import ReactPlayer from "react-player";
import { Container, Row, Col } from "react-bootstrap";

const Envasado = () => {
  return (
    <Container fluid className="contenedor">
      <Row>
        <Col xs="12" md="4">
          <h1>Envasado</h1>
          <p>
            Generalmente al terminar la maduración la cerveza es sometida a un
            proceso de filtración para separar pequeñas partículas de levadura y
            compuestos que aún se encuentran en suspensión. Una vez filtrada se
            obtiene la cerveza brillante, la cual se envasa en diferentes
            formatos para su consumo y en muchos casos se pasteuriza para luego
            poner a disposición de los Cervecistas, que sólo tendrán que
            preocuparse de abrir, servir y disfrutar.
          </p>
        </Col>

        <Col xs="12" md="8">
          <ReactPlayer
            className="react-player"
            url="https://youtu.be/LSRKi5FbJec"
            controls
            volume
            width="100%"
            height="100%"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Envasado;


