import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Elaboracion from "./componentes/cerveza/elaboracion/elaboracion";
import Envasado from "./componentes/cerveza/envasado/envasado";
import Maduracion from "./componentes/cerveza/maduracion/maduracion";
import Footer from "./componentes/footer/footer";
import Home from "./componentes/home/home";
import Login from "./componentes/login/login";
import Contacto from "./componentes/contacto/contacto";
import NavBar from "./componentes/navbar/navbar";
import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="main">
      <BrowserRouter>
        <NavBar />
        <Routes>
          {/* <Route path="./" element={<Home />} /> */}
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="elaboracion" element={<Elaboracion />} />
          <Route path="envasado" element={<Envasado />} />
          <Route path="maduracion" element={<Maduracion />} />
          <Route path="contacto" element={<Contacto />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
