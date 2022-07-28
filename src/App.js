import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

//Importation des pages
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import Header from "./pages/Header";
import Signup from "./pages/Signup";
import Connect from "./pages/Connect";

function App() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
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
            <Header></Header>
            <Routes>
              <Route path="/" element={<Home mainOffers={data} />} />
              <Route path="/offer/:id" element={<Offer mainOffers={data} />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/connect/" element={<Connect />} />
            </Routes>
            <></>
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
