import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signUp, db } from "../../../../firebaseConfig";
import { setDoc, doc } from "firebase/firestore";

const Register = () => {
  const navigate = useNavigate();

  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setUserCredentials({ ...userCredentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await signUp(userCredentials);
      if (res.user.uid) {
        await setDoc(doc(db, "users", res.user.uid), { rol: "user" });
      }
      navigate("/login");
    } catch (error) {}
  };

  return (
    <div className="container-register">
      <form onSubmit={handleSubmit}>
        <div className="container-inputs-register">
          <h3>Email</h3>
          <input
            name="email"
            aria-label="Email"
            type="email"
            onChange={handleChange}
          ></input>
          <h3>Contraseña</h3>
          <input
            name="password"
            aria-label="contraseña"
            type="password"
            onChange={handleChange}
          ></input>
          <h3>Confirmar contraseña</h3>
          <input
            name="confirmPassword"
            aria-label="confirmar contraseña"
            type="password"
            onChange={handleChange}
          ></input>
        </div>

        <div className="container-buttons-register">
          <button type="submit">Registrarme</button>
          <button onClick={() => navigate("/login")} type="button">
            Regresar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
