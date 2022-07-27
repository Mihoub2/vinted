import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

//Importation des pages
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import Header from "./pages/Header";

function App() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState();

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
            <Header></Header> <nav> Ma Navigation</nav>
            <Link to="/home"> Home</Link>
            <br />
            <br />
            <Link to="/offer">Go to Offer</Link>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/offer/:id"
                mainOffers={data.offers}
                element={<Offer />}
              />
            </Routes>{" "}
            <></>
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
