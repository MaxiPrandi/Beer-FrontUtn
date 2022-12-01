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
          className="d-block w-100"
          src={fotoProducto}
          alt="First slide"
          id="fotop"
        />
      
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={fotoProducto2}
          alt="First slide"
          id="fotop"
        />

       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={fotoProducto3}
          alt="First slide"
          id="fotop"
        />

       
      </Carousel.Item>
    </Carousel>
  );
};

export default Carrusel;
