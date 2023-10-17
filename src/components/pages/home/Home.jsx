import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="container-home">
      <div className="container-img-home">
        <img
          className="gif-home"
          src="https://res.cloudinary.com/dxb4thu1x/image/upload/v1688781667/gif_j4p8sj.gif"
        />
        <img src="https://res.cloudinary.com/dxb4thu1x/image/upload/v1688255557/mate-en-guampa-tallado_u0kgmz.jpg" />
        <img src="https://res.cloudinary.com/dxb4thu1x/image/upload/v1697550232/tiposdebombilla_lugntl.jpg" />
        <img src="https://res.cloudinary.com/dxb4thu1x/image/upload/v1688784186/logoColor_rjiop2.jpg" />
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
