import logo from "../assets/logo.jpeg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="Header">
      <div className="leftHeader">
        <Link to="/">
          {" "}
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="centerHeader"></div>
      <div className="rightHeader">
        <span className="button">
          <Link className="button" to="/signup">
            {" "}
            <button>S'inscrire</button>{" "}
          </Link>

          <Link className="button" to="/connect">
            {" "}
            <button>Se connecter</button>{" "}
          </Link>
          <button>Vends tes articles</button>
        </span>
      </div>
    </div>
  );
};

export default Header;
