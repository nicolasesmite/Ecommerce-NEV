import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { loginGoogle, onSignIn } from "../../../../firebaseConfig";
import { db } from "../../../../firebaseConfig";
import { collection, doc, getDoc } from "firebase/firestore";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
import "./Login.css";

const Login = () => {
  const NExist = true;
  const { handleLogIn } = useContext(AuthContext);

  const navigate = useNavigate();

  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUserCredentials({ ...userCredentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await onSignIn(userCredentials);

      if (res?.user) {
        NExist = false;
        const userCollection = collection(db, "users");
        const userRef = doc(userCollection, res.user.uid);
        const userDoc = await getDoc(userRef);

        let finallyUser = {
          email: res.user.email,
          rol: userDoc.data().rol,
        };

        handleLogIn(finallyUser);

        navigate("/");
      }
    } catch (error) {}
  };

  const googleSignIn = async () => {
    try {
      let res = await loginGoogle();
      navigate("/");
    } catch (error) {}
  };

  return (
    <div className="container-login">
      <form onSubmit={handleSubmit}>
        <div className="container-login-form">
          <img
            className="login-img"
            src="https://res.cloudinary.com/dxb4thu1x/image/upload/v1697911872/image_tjacsx.png"
          />
          <div className="container-inputs-login">
            <input
              name="email"
              type="email"
              placeholder="Ingrese su email"
              aria-label="email"
              onChange={handleChange}
            ></input>
            <input
              name="password"
              type="password"
              aria-label="password"
              onChange={handleChange}
              placeholder="Ingrese su contraseña"
            ></input>

            {NExist && (
              <div
                style={{
                  color: "white",
                  padding: "5px",
                }}
              >
                Email y/o contraseña incorrectos
              </div>
            )}
          </div>

          <Link to="/forgot-password" style={{ color: "blue" }}>
            Olvide mi contraseña
          </Link>

          <div className="container-buttons-login">
            <button type="submit">Ingresar</button>
            <button onClick={googleSignIn} type="button">
              Ingresa con google
            </button>
          </div>

          <h3 className="h3-title-register">¿Aun no tienes cuenta?</h3>

          <button
            className="button-register-login"
            onClick={() => navigate("/register")}
            type="button"
          >
            Registrate
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
