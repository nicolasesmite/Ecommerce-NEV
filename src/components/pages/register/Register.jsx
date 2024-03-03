import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signUp, db } from "../../../../firebaseConfig";
import { setDoc, doc } from "firebase/firestore";
import "./Register.css";
import swal from "sweetalert2";

const Register = () => {
  const navigate = useNavigate();

  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setUserCredentials({
      ...userCredentials,
      [e.target.name]: e.target.value,
    });
  };

  const onValidate = (userCredentials) => {
    let errors = {};
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let regexPassword = /^[A-Za-zÑñ#$%&*[0-9]+$/;

    if (!userCredentials.email.trim()) {
      errors.email = 'El campo "Email" no debe estar vacio.';
    } else if (!regexEmail.test(userCredentials.email)) {
      errors.email = 'El campo "Email" no esta en un formato correcto';
    }

    if (
      !userCredentials.password.trim() ||
      userCredentials.password.length < 8
    ) {
      errors.password =
        'El campo "Password" debe incluir al menos 8 caracteres';
    } else if (!regexPassword.test(userCredentials.password)) {
      errors.password =
        'El campo "Contraseña" solo admite letras mayusculas, minusculas y los siguientes caracteres especiales (#$%&*) .';
    }

    if (userCredentials.password !== userCredentials.confirmPassword) {
      errors.confirmPassword = "Las contraseñas deben coincidir";
    }

    return errors;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    let err = onValidate(userCredentials);
    setErrors(err);

    if (Object.keys(err).length === 0) {
      try {
        let res = await signUp(userCredentials);
        if (res.user.uid) {
          await setDoc(doc(db, "users", res.user.uid), { rol: "user" });
        }
        navigate("/login");
      } catch (error) {
        swal.fire({
          title: "UPS!",
          text: "El correo que estas intentando registrar ya se encuentra en nuestros usuarios!",
          imageUrl:
            "https://res.cloudinary.com/dxb4thu1x/image/upload/v1709493806/img_99352_mate3_k9kxy1.jpg",
          imageWidth: 400,
          imageHeight: 200,
          imageAlt: "Custom image",
        });
      }
    }
  };

  return (
    <div className="container-register">
      <form onSubmit={handleSubmit}>
        <div className="container-inputs-register">
          <h3>Email</h3>
          <input
            name="email"
            placeholder="Ingresa tu email"
            type="email"
            onChange={handleChange}
          ></input>
          {errors.email && <div>{`${errors.email}`}</div>}
          <h3>Contraseña</h3>
          <input
            name="password"
            placeholder="Contraseña"
            type="password"
            onChange={handleChange}
          ></input>
          {errors.password && <div>{`${errors.password}`}</div>}
          <h3>Confirmar contraseña</h3>
          <input
            name="confirmPassword"
            placeholder="Repetir contraseña"
            type="password"
            onChange={handleChange}
          ></input>
          {errors.confirmPassword && <div>{`${errors.confirmPassword}`}</div>}
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
