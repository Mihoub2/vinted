import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./connect.scss";

const Connect = ({ setUser }) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
      if (response.data.token) {
        setUser(response.data.token);
        navigate("/");
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <div className="connectContainer">
      <div className="connectForm">
        <h2 className="connectTitle">Se connecter</h2>{" "}
        <form onSubmit={onSubmitForm}>
          <input
            className="normalInput"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <input
            className="normalInput"
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <input className="submitButton" type="submit" value="Se connecter" />
        </form>
      </div>
    </div>
  );
};

export default Connect;
