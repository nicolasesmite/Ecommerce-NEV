import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { forgotPassword } from "../../../../firebaseConfig";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    let res = await forgotPassword(email);
    navigate("/login");
  };

  return (
    <div className="container-forgot">
      <h1 className="title-forgot">¿Olvidaste tu contraseña?</h1>
      <form className="form-container" onSubmit={handleSubmit}>
        <input
          className="input-forgot"
          type="email"
          placeholder="ingresa tu email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
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
