import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";

//Importation des pages
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import Header from "./components/Header";
import Signup from "./pages/Signup";
import Connect from "./pages/Connect";
import CreatOffer from "./pages/CreatOffer";

function App() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [token, setToken] = useState(Cookies.get("userToken") || null);
  const [filter, setFilter] = useState("");

  const setUser = (tokenToCheck) => {
    if (tokenToCheck !== null) {
      Cookies.set("userToken", tokenToCheck);
    } else {
      Cookies.remove("userToken");
    }
    setToken(tokenToCheck);
  };

  useEffect(() => {
    const fetchData = async () => {
      // if(priceMax) {
      //   if()
      //   filters= filters + "&title=" + title
      // }
      const response = await axios.get(
        "https://lereacteur-vinted-api.herokuapp.com/offers"
      );
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <Router>
      <div>
        {isLoading === true ? (
          <h1>En cours de chargement</h1>
        ) : (
          <>
            <Header token={token} setUser={setUser} />
            <Routes>
              <Route path="/" element={<Home mainOffers={data} />} />
              <Route path="/offer/:id" element={<Offer mainOffers={data} />} />
              <Route path="/signup" element={<Signup setUser={setUser} />} />
              <Route path="/connect/" element={<Connect setUser={setUser} />} />
              <Route
                path="/creatOffer"
                element={<CreatOffer token={token} />}
              />
            </Routes>
            <></>
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
