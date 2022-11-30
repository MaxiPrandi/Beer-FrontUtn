import React, { useState } from "react";
import "./home.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import fotoProducto1 from "../assests/images/birra1.jpg";
import fotoProducto2 from "../assests/images/birra2.jpg";
import fotoProducto3 from "../assests/images/birra3.jpg";
import fotoProducto4 from "../assests/images/birra4.jpg";
import fotoProducto5 from "../assests/images/birra5.jpg";
import fotoProducto6 from "../assests/images/birra6.jpg";
import { Link } from "react-router-dom";
import Carrusel from "../carrusel/carrusel";

const Home = () => {
  const [count, setCount] = useState(0);

  return (
    <Container fluid className="productos">
      <Carrusel />
      <Row>
        <Col xs="12" sm="6" md="3">
          <div className="caja ">
            <Link to="#">
              <img className="foto" src={fotoProducto1} alt="producto1" />
            </Link>
            <div className="producto-index">
              <h3>Cerveza Blonde</h3>
              <div className="textoCaja">
                <p>
                  De color dorado claro y cuerpo ligero. equilibrada y
                  refrescante.
                </p>
              </div>
              <p className="precio">
                $ 850{" "}
                <box-icon
                  size="md"
                  animation="tada"
                  name="cart"
                  color="white"
                ></box-icon>
              </p>
              <h5> Cervezas en el carrito: {count}</h5>
            </div>

            <Button className="boton1" onClick={() => setCount(count + 1)}>
              Agregar Birra
            </Button>
            <Button className="boton2" onClick={() => setCount(count - 1)}>
              Quitar Birra
            </Button>
          </div>
        </Col>

        {/* columna2 */}
        <Col xs="12" sm="6" md="3">
          <div className="caja ">
            <Link to="#">
              <img className="foto" src={fotoProducto2} alt="producto1" />
            </Link>
            <div className="producto-index">
              <h3>Cerveza Scottish</h3>
              <div className="textoCaja">
                <p>Maltosa. Con notas a caramelo y un color rubí intenso.</p>
              </div>
              <p className="precio">
                $ 980{" "}
                <box-icon
                  size="md"
                  animation="tada"
                  name="cart"
                  color="white"
                ></box-icon>
              </p>
              <h5> Cervezas en el carrito: {count}</h5>
            </div>

            <Button className="boton1" onClick={() => setCount(count + 1)}>
              Agregar Birra
            </Button>
            <Button className="boton2" onClick={() => setCount(count - 1)}>
              Quitar Birra
            </Button>
          </div>
        </Col>
        {/* columna 3 */}
        <Col xs="12" sm="6" md="3">
          <div className="caja ">
            <Link to="#">
              <img className="foto" src={fotoProducto3} alt="producto1" />
            </Link>
            <div className="producto-index">
              <h3>Cerveza Honey</h3>
              <div className="textoCaja">
                <p>
                  Doble agregado de miel multifloral balanceada entre lo dulce,
                  la malta y el lúpulo.
                </p>
              </div>
              <p className="precio">
                $ 1150{" "}
                <box-icon
                  size="md"
                  animation="tada"
                  name="cart"
                  color="white"
                ></box-icon>
              </p>
              <h5> Cervezas en el carrito: {count}</h5>
            </div>

            <Button className="boton1" onClick={() => setCount(count + 1)}>
              Agregar Birra
            </Button>
            <Button className="boton2" onClick={() => setCount(count - 1)}>
              Quitar Birra
            </Button>
          </div>
        </Col>
      </Row>
      {/*   2da Row */}
      <Row>
        <Col xs="12" sm="6" md="3">
          <div className="caja ">
            <Link to="#">
              <img className="foto" src={fotoProducto4} alt="producto1" />
            </Link>
            <div className="producto-index">
              <h3>Cerveza Black Ipa</h3>
              <div className="textoCaja">
                <p>
                  Intenso aroma a lúpulos americanos, amargor en boca y un color
                  dorado puro.
                </p>
              </div>
              <p className="precio">
                $ 1230{" "}
                <box-icon
                  size="md"
                  animation="tada"
                  name="cart"
                  color="white"
                ></box-icon>
              </p>
              <h5> Cervezas en el carrito: {count}</h5>
            </div>

            <Button className="boton1" onClick={() => setCount(count + 1)}>
              Agregar Birra
            </Button>
            <Button className="boton2" onClick={() => setCount(count - 1)}>
              Quitar Birra
            </Button>
          </div>
        </Col>

        {/* columna2 */}
        <Col xs="12" sm="6" md="3">
          <div className="caja ">
            <Link to="#">
              <img className="foto" src={fotoProducto5} alt="producto1" />
            </Link>
            <div className="producto-index">
              <h3>Cerveza Red Ipa</h3>
              <div className="textoCaja">
                <p>
                  De gran equilibrio entre maltas, caramelo y lúpulos. Aromática
                  y refrescante
                </p>
              </div>
              <p className="precio">
                $ 1450{" "}
                <box-icon
                  size="md"
                  animation="tada"
                  name="cart"
                  color="white"
                ></box-icon>
              </p>
              <h5> Cervezas en el carrito: {count}</h5>
            </div>

            <Button className="boton1" onClick={() => setCount(count + 1)}>
              Agregar Birra
            </Button>
            <Button className="boton2" onClick={() => setCount(count - 1)}>
              Quitar Birra
            </Button>
          </div>
        </Col>
        {/* columna 3 */}
        <Col xs="12" sm="6" md="3">
          <div className="caja ">
            <Link to="#">
              <img className="foto" src={fotoProducto6} alt="producto1" />
            </Link>
            <div className="producto-index">
              <h3>Cerveza Weisse</h3>
              <div className="textoCaja">
                <p>
                  Cerveza con trigo, de altísima tomabilidad, con agregado de
                  piel de naranja en maduración.
                </p>
              </div>
              <p className="precio">
                $ 1300{" "}
                <box-icon
                  size="md"
                  animation="tada"
                  name="cart"
                  color="white"
                ></box-icon>
              </p>
              <h5> Cervezas en el carrito: {count}</h5>
            </div>

            <Button className="boton1" onClick={() => setCount(count + 1)}>
              Agregar Birra
            </Button>
            <Button className="boton2" onClick={() => setCount(count - 1)}>
              Quitar Birra
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
