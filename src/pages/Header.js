import logo from "../assets/logo.jpeg";

const Header = () => {
  return (
    <div className="Header">
      <div className="leftHeader">
        <img src={logo} alt="" />
      </div>
      <div className="centerHeader"></div>
      <div className="rightHeader">
        <span className="button">
          <button>S'inscrire</button>
          <button>Se connecter</button>
          <button>Vends tes articles</button>
        </span>
      </div>
    </div>
  );
};

export default Header;
