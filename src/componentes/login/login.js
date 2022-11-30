import { useForm } from "react-hook-form";
import "./login.css";
import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
/* 
function alerta() {
  alert("Gracias");
}
 */
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
  };

  return (
    <Container fluid className="form">
      
      <Row >
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
                <label className="text-light fw-bolder">
                  {" "}
                  Cerveza preferida{" "}
                </label>
                <select
                  {...register("cerveza")}
                  className="input"
                  name="cerveza"
                >
                  <option value="Blonde"> Blonde </option>
                  <option value="Scottish"> Scottish </option>
                  <option value="Honey"> Honey </option>
                  <option value="Black Ipa"> Black Ipa </option>
                  <option value="Black Ipa"> Red Ipa </option>
                  <option value="Weisse"> Weisse </option>
                </select>
              </div>

              <input
                type="submit"
                value="Login"
                className="submit"
                /*   onClick={alerta} */
              />
            </form>
          </div>
        </Col>
        </Row>
        <Row className="texto">
        <Col xs="8" sm="10" md="8"  >
          <div >
            {Entradas.map((item) => (
              
              <p>
                Hola {item.nombre} {item.apellido} , despues te enviaremos una
                invitacion a: <br></br> {item.email}  para que vengas a tomar una Cerveza {item.cerveza}
              </p> ))}
              </div>
        </Col>
      </Row>
    
    </Container>
  );
};
export default Login;

{
  /* <ul>
{Entradas.map((item) => (
  <li className="text-warning fs-3 fw-bold"> Hola 
    {item.nombre} - {item.apellido} - {item.email} - Tomamos una {item.cerveza}
  </li>
  
))}
</ul> */
}
