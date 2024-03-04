import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { db, loginGoogle, onSignIn, auth } from "../../../../firebaseConfig";
import { collection, doc, getDoc } from "firebase/firestore";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../../context/AuthContext";
import "./Login.css";
import { getRedirectResult } from "firebase/auth";

const Login = () => {
  useEffect(() => {
    async function startFetching() {
      const res = await getRedirectResult(auth);
      if (res) {
        let finallyUser = {
          email: res.user.email,
          rol: "user",
        };

        handleLogIn(finallyUser);
      }
    }

    startFetching();
  }, []);
  let nExist = true;
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
        nExist = false;
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

            {nExist && (
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
            <button onClick={() => loginGoogle()} type="button">
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
