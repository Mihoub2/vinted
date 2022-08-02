import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import "./header.scss";

const Header = ({ token, setUser }) => {
  const navigate = useNavigate();
  return (
    <div className="Header">
      <div className="leftHeader">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="centerHeader">
        <input
          className="inputCenter"
          type="text"
          placeholder="Rechercher des articles"
        />
      </div>
      {token === null ? (
        <div className="rightHeader">
          <div className="twoButton">
            <Link className="button" to="/signup">
              <button>S'inscrire</button>
            </Link>
            <Link className="button" to="/connect">
              <button>Se connecter</button>
            </Link>
          </div>
          <Link className="button" to={token ? "/creatOffer" : "/connect"}>
            <button>Vends tes articles</button>
          </Link>
        </div>
      ) : (
        <span>
          <div className="deconnect">
            <Link className="button" to={token ? "/creatOffer" : "/connect"}>
              <button>Vends tes articles</button>
            </Link>
            <button
              className="deco"
              onClick={() => {
                setUser(null);
                navigate("/");
              }}
            >
              Se déconnecter
            </button>
          </div>
        </span>
      )}
    </div>
  );
};

export default Header;
