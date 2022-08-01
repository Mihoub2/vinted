import { useState } from "react";
import axios from "axios";

const CreatOffer = (token) => {
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

    const response = await axios.post(
      "https://lereacteur-vinted-api.herokuapp.com/offer/publish",
      formData,
      {
        title: title,
        description: description,
        price: prix,
        condition: etat,
        city: lieu,
        brand: marque,
        size: taille,
        color: couleur,
        picture: picture,
        headers: {
          authorization: "Bearer " + token,
          "Content-Type": "multipart/form-data",
        },
      }
    );

    setData(response.data);
    setIsPictureSending(false);
  };

  return (
    <div>
      <h1>Vends ton articles</h1>
      <form onSubmit={handleSendOffer}>
        {isPictureSending === true ? (
          <p>Image en cours d'upload</p>
        ) : (
          data && <img src={data.picture} style={{ width: "200px" }} alt="" />
        )}

        <input
          onChange={(event) => {
            setPicture(event.target.files[0]);
          }}
          type="file"
        />
        <input
          type="title"
          placeholder="Titre"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        <input
          type="description"
          placeholder="Décris ton article"
          value={description}
          onChange={(event) => {
            setDescription(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Marque"
          value={marque}
          onChange={(event) => {
            setMarque(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Taille"
          value={taille}
          onChange={(event) => {
            setTaille(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Couleur"
          value={couleur}
          onChange={(event) => {
            setCouleur(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Etat"
          value={etat}
          onChange={(event) => {
            setEtat(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Lieu"
          value={lieu}
          onChange={(event) => {
            setLieu(event.target.value);
          }}
        />
        <input
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
  );
};

export default CreatOffer;
