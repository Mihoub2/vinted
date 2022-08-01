import { useState } from "react";
import axios from "axios";
import "./creatoffer.scss";

const CreatOffer = ({ token }) => {
  console.log(token);

  const [picture, setPicture] = useState(null);
  const [data, setData] = useState(null);
  const [isPictureSending, setIsPictureSending] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [marque, setMarque] = useState("");
  const [taille, setTaille] = useState("");
  const [couleur, setCouleur] = useState("");
  const [etat, setEtat] = useState("");
  const [lieu, setLieu] = useState("");
  const [prix, setPrix] = useState("");

  const handleSendOffer = async (event) => {
    event.preventDefault();
    setIsPictureSending(true);
    const formData = new FormData();
    formData.append("picture", picture);
    formData.append("title", title);

    formData.append("price", prix);
    formData.append("condition", etat);
    formData.append("city", lieu);
    formData.append("brand", marque);
    formData.append("size", taille);
    formData.append("color", couleur);

    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/offer/publish",
        formData,
        {
          headers: {
            authorization: "Bearer " + token,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setData(response.data);
      setIsPictureSending(false);
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <div className="creatContainer">
      <div className="creatForm">
        <h1 className="creatTitle">Vends ton articles</h1>
        <form className="otherForm" onSubmit={handleSendOffer}>
          {isPictureSending === true ? (
            <p>Image en cours d'upload</p>
          ) : (
            data && <img src={data.picture} style={{ width: "200px" }} alt="" />
          )}
          <label htmlFor="file" className="setPic">
            <span className="inputSign">+</span>
            <span>Ajouter une photo</span>
          </label>
          <input
            className="insertPic"
            onChange={(event) => {
              setPicture(event.target.files[0]);
            }}
            type="file"
          />

          <input
            className="normalInput"
            type="title"
            placeholder="Titre"
            value={title}
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
          <input
            className="normalInput"
            type="description"
            placeholder="Décris ton article"
            value={description}
            onChange={(event) => {
              setDescription(event.target.value);
            }}
          />
          <input
            className="normalInput"
            type="text"
            placeholder="Marque"
            value={marque}
            onChange={(event) => {
              setMarque(event.target.value);
            }}
          />
          <input
            className="normalInput"
            type="text"
            placeholder="Taille"
            value={taille}
            onChange={(event) => {
              setTaille(event.target.value);
            }}
          />
          <input
            className="normalInput"
            type="text"
            placeholder="Couleur"
            value={couleur}
            onChange={(event) => {
              setCouleur(event.target.value);
            }}
          />
          <input
            className="normalInput"
            type="text"
            placeholder="Etat"
            value={etat}
            onChange={(event) => {
              setEtat(event.target.value);
            }}
          />
          <input
            className="normalInput"
            type="text"
            placeholder="Lieu"
            value={lieu}
            onChange={(event) => {
              setLieu(event.target.value);
            }}
          />
          <input
            className="normalInput"
            type="text"
            placeholder="Prix"
            value={prix}
            onChange={(event) => {
              setPrix(event.target.value);
            }}
          />
          {/* <input type="checkbox" placeholder="Prix" /> */}
          <input type="submit" value="Envoyer votre offre!" />
        </form>
      </div>
    </div>
  );
};

export default CreatOffer;
