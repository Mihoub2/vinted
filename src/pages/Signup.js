import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./signup.scss";

const Signup = ({ setUser }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [newsLetter, setNewsLetter] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmitForm = async (event) => {
    event.preventDefault();

    setErrorMessage("");

    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/signup",
        {
          email: email,
          username: username,
          password: password,
          newsletter: newsLetter,
        }
      );

      if (response.data) {
        setUser(response.data.token);
        navigate("/");
      }
    } catch (error) {
      console.log(error.response);
      if (error.response.status === 409) {
        setErrorMessage("Cet email a déjà un compte !");
      }
    }
  };

  return (
    <div className="loginContainer">
      <div className="loginForm">
        <h2 className="signUpTitle">S'inscrire</h2>
        <form onSubmit={onSubmitForm}>
          <input
            className="normalInput"
            type="Username"
            placeholder="Nom d'utilisateur"
            value={username}
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
          <input
            className="normalInput"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />{" "}
          <input
            className="normalInput"
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <div className="checkBoxAndText">
            <input
              className="checkbox"
              type="checkbox"
              value={newsLetter}
              onChange={(event) => {
                setNewsLetter(event.target.checked);
              }}
            />
            <span>S'inscrire à notre newsletter</span>
          </div>
          <p className="submitInfo">
            En m'inscrivant je confirme avoir lu et accepté les Termes &
            Conditions et Politique de Confidentialité de Vinted. Je confirme
            avoir au moins 18 ans.
          </p>
          <input className="submitButton" type="submit" value="S'inscrire" />
          <p style={{ color: "red" }}>{errorMessage}</p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
