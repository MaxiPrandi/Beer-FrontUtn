import { useForm } from "react-hook-form";
import "./login.css";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import { useState } from "react";

/* LOGIN */
const Login = () => {
  const {
    register,
    formState: { errors },
    watch,
    handleSubmit,
  } = useForm("");

  const [Entradas, setEntradas] = useState([]);

  const onSubmit = (data, e) => {
    console.log(data);
    setEntradas([...Entradas, data]);
    e.target.reset();
  };
  /*  modal funcion */

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container fluid className="form">
      <Row>
        <Col xs="8" sm="10" md="8">
          <div>
            <form onSubmit={handleSubmit(onSubmit)} className="items">
              <h1 className="text-light text-center">Ingresa a tu cuenta</h1>
              <div className="text-light"> Nombre: {watch("nombre")}</div>

              <div>
                <input
                  name="nombre"
                  type="text"
                  placeholder="Nombre"
                  className="input"
                  {...register("nombre", {
                    required: true,
                    maxLength: 15,
                  })}
                />
                {errors.nombre?.type === "required" && (
                  <p className="text-warning fw-bold">
                    {" "}
                    El campo nombre es obligatorio{" "}
                  </p>
                )}
                {errors.nombre?.type === "maxlength" && (
                  <p className="text-warning fw-bold">
                    {" "}
                    El campo nombre debe tener menos de 15 caracteres
                  </p>
                )}
              </div>
              <div>
                <input
                  name="apellido"
                  type="text"
                  placeholder="Apellido"
                  className="input"
                  {...register("apellido", { required: true })}
                />
                {errors.nombre?.type === "required" && (
                  <p className="text-warning fw-bold">
                    {" "}
                    El campo nombre es obligatorio{" "}
                  </p>
                )}
                {errors.nombre?.type === "maxlength" && (
                  <p className="text-warning fw-bold">
                    {" "}
                    El campo nombre debe tener menos de 10 caracteres
                  </p>
                )}
              </div>
              <div>
                <input
                  name="email"
                  type="text"
                  placeholder="Email"
                  className="input"
                  {...register("email", {
                    pattern: /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/,
                  })}
                />
                {errors.email?.type === "pattern" && (
                  <p className="text-warning fw-bold">
                    {" "}
                    El formato del Email es incorrecto{" "}
                  </p>
                )}
              </div>
              <div>
                <label className="text-light fw-bolder mb-3 fs-4">
                  {" "}
                  Elegi tu cerveza preferida{" "}
                </label>
                <select
                  {...register("cerveza")}
                  className="inputselect"
                  name="cerveza"
                >
                  <option value="Blonde"> Blonde </option>
                  <option value="Scottish"> Scottish </option>
                  <option value="Honey"> Honey </option>
                  <option value="Black Ipa"> Black Ipa </option>
                  <option value="Black Ipa"> Red Ipa </option>
                  <option value="Weisse"> Weisse </option>
                </select>
                <div className="text-light fw-bold"> Tu cerveza es: {watch("cerveza")}</div>
              </div>

              <Button
                variant="primary"
                type="submit"
                value="Enviar"
                className="submit"
                onClick={handleShow}
              >
                Entra a tu cuenta
              </Button>
              {Entradas.map((item) => (
                <Modal show={show} onHide={handleClose} animation={false}>
                  <Modal.Header closeButton>
                    <Modal.Title>The Beer</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    Hola {item.nombre} {item.apellido} <br></br> Te enviaremos
                    una invitacion a tu E-mail:  {item.email} <br></br>Asi venis a
                    tomar una Cerveza {item.cerveza} bien helada!<br></br>Te esperamos!
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                      Cerrar
                    </Button>
                  </Modal.Footer>
                </Modal>
              ))}
            </form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
