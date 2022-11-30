import { useForm } from "react-hook-form";
import "./login.css";
import { Container, Row, Col } from "react-bootstrap";

function alerta() {
  alert("Gracias");
}

const Login = () => {
  const {
    register,
    formState: { errors },
    watch,
    handleSubmit,
  } = useForm("");
  const onSubmit = (data) => {
    console.log(data);
  };

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
                  type="text"
                  placeholder="Nombre"
                  className="input"
                  {...register("nombre", {
                    required: true,
                    maxLength: 10,
                  })}
                />
                {errors.nombre?.type === "required" && (
                  <p className="text-light"> El campo nombre es obligatorio </p>
                )}
                {errors.nombre?.type === "maxlength" && (
                  <p className="text-light">
                    {" "}
                    El campo nombre debe tener menos de 10 caracteres
                  </p>
                )}
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Apellido"
                  className="input"
                  {...register("apellido", { required: true })}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Email"
                  className="input"
                  {...register("email", {
                    pattern: /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/,
                  })}
                />
                {errors.email?.type === "pattern" && (
                  <p className="text-light">
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
                <select {...register("cerveza")} className="input">
                  <option value="blonde"> Blonde </option>
                  <option value="red"> Red </option>
                  <option value="ipa"> Ipa </option>
                </select>
              </div>

              <input
                type="submit"
                value="Login"
                className="submit"
                onClick={alerta}
              />
            </form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default Login;
