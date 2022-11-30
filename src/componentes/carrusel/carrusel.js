import React from "react";
import "./carrusel.css";
import Carousel from "react-bootstrap/Carousel";
import fotoProducto from "../assests/images/banner-beer.jpg";
import fotoProducto2 from "../assests/images/banner2.jpg";
import fotoProducto3 from "../assests/images/banner3.jpg";

const Carrusel = () => {
  return (
    <Carousel className="Carrusel">
      <Carousel.Item>
        <img
          className="d-block w-100 h-8 mb-5"
          src={fotoProducto}
          alt="First slide"
          id="fotop"
        />
        <Carousel.Caption>
          <h1 className="fw-bold mb-4">Siempre es....</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-10 mb-5"
          src={fotoProducto2}
          alt="First slide"
          id="fotop"
        />

        <Carousel.Caption>
          <h1 className="text-dark fs-1  fw-bold mb-4">...buen momento para...</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-10 mb-5"
          src={fotoProducto3}
          alt="First slide"
          id="fotop"
        />

        <Carousel.Caption>
          <h1 className="text-success fw-bold text-start mb-4">
            una Beer helada!
          </h1>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Carrusel;
