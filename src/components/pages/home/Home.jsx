import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="container-home">
      <header>
        <h1>Ja! Ke Mate</h1>
      </header>
      <div className="container-img-home">
        <img
          className="gif-home"
          src="https://res.cloudinary.com/dxb4thu1x/image/upload/v1688781667/gif_j4p8sj.gif"
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
