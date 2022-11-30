import { Row, Col, Nav } from "react-bootstrap";
import "boxicons";
import "./footer.css";
import { Link } from "react-router-dom";
import logo from "../assests/logofoter.png";



const Footer = () => {
  return (
   
      <Row className="mainFooter">
        <Col xs="6" sm="2" md="3">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
        </Col>

        <Col xs="12 text-center" sm="6" md="3">
          <div>
            <h1>Beer Shop </h1>
            <h5>
              Somos apasionados por la cerveza artesanal, nos esmeramos día a
              día para hacer las cervezas más ricas, y brindarle a nuestros
              clientes más de lo que esperan...<br></br>Salud !
            </h5>
          </div>
        </Col>

        <Col xs="12" sm="12" md="3" className="enlaces">
          <Nav style={{ maxHeight: "100px" }} navbarScroll >
            <div>
              <Nav.Link className="text-light fw-bolder fs-2" as={Link} to="/">
                Shop 
              </Nav.Link>
             
              <Nav.Link
                className="text-light fw-bolder fs-2"
                as={Link}
                to="/contacto"
              >
                Contacto
              </Nav.Link>
              <Nav.Link
                className="text-primary fw-bolder fs-2"
                as={Link}
                to="/login"
              >
                Login
              </Nav.Link>
            </div>
          </Nav>
        </Col>

        <Col xs="12 mt-5" sm="6" md="3">
          <div className="carrito">
            <a href="https://goo.gl/maps/azLaEeYM5iGkA3C96" target="_blank" rel="noreferrer noopener">
              <box-icon size="md" type="solid" name="map"></box-icon>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer noopener">
              <box-icon size="md" type="logo" name="instagram-alt"></box-icon>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer noopener">
              <box-icon size="md" type="logo" name="twitter" rel="noreferrer noopener"></box-icon>
            </a>
            <a href="https://youtube.com" target="_blank">
              <box-icon size="md" type="logo" name="youtube" rel="noreferrer noopener"></box-icon>
            </a>
          </div>
          <div className="git">
            <p className="text-light">Maximiliano Prandi © 2022 GitHub, Inc.</p>
          <a href="https://https://github.com/Maxiomega" target="_blank"rel="noreferrer noopener" >
              <box-icon size="lg" type="logo" name="github"></box-icon>
            </a>
            </div>
        </Col>
        
       
      </Row>
  
     
  );
};

export default Footer;
