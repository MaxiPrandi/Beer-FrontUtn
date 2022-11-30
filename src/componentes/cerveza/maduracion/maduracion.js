import React from "react";
import "../cerveza.css";
import { Container, Row, Col } from "react-bootstrap";
import proceso from "../../assests/proceso.jpg";

const Maduracion = () => {
  return (
    <Container fluid className="contenedor">
      <Row>
        <Col xs="12" md="4">
          <h1>Maduracion</h1>
          <p>
            Mantener dicha temperatura permitirá que la cerveza madure a una
            velocidad adecuada y que el producto final sea el esperado; ya que
            demasiado frío la maduración desacelera y si está muy cálido, puede
            llegar a presentar aromas y sabores indeseados.<br></br>
            Hay quien dice que la maduración tarda 3-4 meses, pero esto no es
            practicable para cada estilo de cerveza. Por ejemplo las cervezas
            muy lupulizadas, como IPA, pierden su sabor rápidamente y hay que
            beberlas bastante frescas.
          </p>
        </Col>
        <Col xs="12" md="8">
          <img className="process" src={proceso} alt="proceso" />
        </Col>
      </Row>
    </Container>
  );
};

export default Maduracion;
