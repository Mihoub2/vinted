import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [isOk, setIsOk] = useState(true)

  const onSubmitForm = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/signup",
        {
          email: email,
          username: username,
          password: password,
          newsletter: true,
        }
      );
      setEmail(response.data.email);
      setUsername(response.data.username);
      setPassword(response.data.password);
      Cookies.set("token", response.data.token);
      navigate("/connect");
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <div className="loginContainer">
      <div className="loginForm">
        <h2>S'inscrire</h2>
        <form onSubmit={onSubmitForm}>
          <input
            type="Username"
            placeholder="Nom d'utilisateur"
            value={username}
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
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

export default Signup;
