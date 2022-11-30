import "./navbar.css";
import "boxicons";

import logo from "../assests/beerhouse.png";
import { Nav, Container, NavDropdown, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Container fluid className="navi">
      <Row>
        <Col xs="8" sm="4" md="2">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
        </Col>

        <Col xs="12" sm="6" md="3">
          <div>
            <h1>Beer Shop </h1>
            <h5> Tu Birra en un click...</h5>
          </div>
        </Col>

        <Col xs="12" sm="12" md="5">
          <div>
            <Nav
              className="enlaces"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link className="text-light fw-bolder" as={Link} to="/">
                Shop
              </Nav.Link>

              <NavDropdown title="Cervezas" id="dropdown">
                <NavDropdown.Item as={Link} to="/elaboracion">
                  Elaboracion
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/maduracion">
                  Maduracion
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/envasado">
                  Envasado
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link
                className="text-light fw-bolder"
                as={Link}
                to="/contacto"
              >
                Contacto
              </Nav.Link>
              <Nav.Link
                className="text-primary fw-bolder"
                as={Link}
                to="/login"
              >
                Login
              </Nav.Link>
            </Nav>
          </div>
        </Col>

        <Col xs="12" sm="6" md="2">
          <div className="carrito">
            <a href="https://goo.gl/maps/azLaEeYM5iGkA3C96" target="_blank">
              <box-icon size="md" type="solid" name="map"></box-icon>
            </a>
            <a href="https://instagram.com" target="_blank">
              <box-icon size="md" type="logo" name="instagram-alt"></box-icon>
            </a>
            <a href="https://twitter.com" target="_blank">
              <box-icon size="md" type="logo" name="twitter"></box-icon>
            </a>
            <a href="https://youtube.com" target="_blank">
              <box-icon size="md" type="logo" name="youtube"></box-icon>
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default NavBar;
