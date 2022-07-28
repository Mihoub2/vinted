import axios from "axios";
import { useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Connect = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");

  const onSubmitForm = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/login",
        {
          email: email,
          password: password,
        }
      );
      setEmail(response.data.email);
      setPassword(response.data.password);
      console.log(response.data);
      const cookie = Cookies.get("token");

      Cookies.get(cookie, token);
      setToken("token");
      navigate("/");
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <div className="connectContainer">
      <div className="connectForm">
        <h2>Se connecter</h2>{" "}
        <form onSubmit={onSubmitForm}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Connect;
