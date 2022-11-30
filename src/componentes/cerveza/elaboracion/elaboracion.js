import React from "react";
import "../cerveza.css";
import ReactPlayer from "react-player";
import { Container, Row, Col } from "react-bootstrap";

const Elaboracion = () => {
  return (
    <Container fluid className="contenedor">
      <Row>
        <Col xs="12" md="8">
          <ReactPlayer
            className="react-player"
            url="https://youtu.be/TbcnMKjcoUE"
            controls
            volume
            width="100%"
            height="100%"
          />
        </Col>
        <Col xs="12" md="4">
          <h1>Elaboracion</h1>
          <p>
            El proceso de fabricación de la cerveza es fundamental y debe formar
            parte de la evolución y aprendizaje de cualquier Cervecista...
            <br></br> A continuación describiremos paso a paso el proceso de
            elaboración, explicando la diferencia fundamental entre las
            cervezas, según el tipo de fermentación que se produzca. Es muy
            probable que cada productor haga sus propias modificaciones a lo
            largo del proceso, para obtener una cerveza con unas características
            propias y diferenciadas.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Elaboracion;
