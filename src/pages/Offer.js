import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./offer.scss";

const Offer = () => {
  const { id } = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
        );
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error.response);
      }
      setIsLoading(false);
    };

    fetchData();
  }, [id]);

  return (
    <div className="page offer">
      {isLoading === true ? (
        <h1>En cours de chargement</h1>
      ) : (
        <>
          <div className="offersList">
            <div className="leftPartOffer">
              <img src={data.product_image.secure_url} alt="" />
            </div>
            <div className="rightPartOffer">
              <div className="block">
                <p className="offerPrice">{data.product_price}$</p>
                <div className="blockRightTop">
                  <div className="caracOffer">
                    <div className="leftCaracOffer">
                      <p>MARQUE</p>
                      <p>TAILLE</p>
                      <p>ETAT</p>
                      <p>COULEUR</p>
                      <p>EMPLACEMENT</p>
                    </div>
                    <div className="rightCaracOffer">
                      <div>
                        {data.product_details.map((item) => {
                          const keys = Object.keys(item);
                          return <p>{item[keys[0]]}</p>;
                        })}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="blockRightBot">
                  <p className="titleOffer">{data.product_name}</p>
                  <p className="descriptionOffer">{data.product_description}</p>
                </div>
                {data.owner && data.owner.account.avatar && (
                  <div className="blockUser">
                    <img src={data.owner.account.avatar.secure_url} alt="ok" />
                    {data.owner.account.username}
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Offer;
