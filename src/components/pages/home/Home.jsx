import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="container-home">
      <h1 className="h1-home">BIENVENIDOS A LA TIENDA</h1>

      <div className="container-img-home">
        <img
          className="gif-home"
          src="https://res.cloudinary.com/dxb4thu1x/image/upload/v1709494881/D5Z6q0KXoAAzoE-_i7sxrt.jpg"
        />
      </div>
      <button
        className="button-home"
        type="button"
        onClick={() => navigate("/shop")}
      >
        Ir a comprar
      </button>
    </div>
  );
};

export default Home;
