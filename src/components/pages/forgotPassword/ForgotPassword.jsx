import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const navigate = useNavigate();

  return (
    <div className="container-forgot">
      <h1 className="title-forgot">¿Olvidaste tu contraseña?</h1>
      <form className="form-container">
        <input
          className="input-forgot"
          type="email"
          placeholder="ingresa tu email"
        ></input>
        <div className="container-buttons-forgot">
          <button type="submit">Recuperar</button>
          <button type="button" onClick={() => navigate("/login")}>
            Regresar
          </button>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
