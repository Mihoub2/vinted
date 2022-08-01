import { Link } from "react-router-dom";
import "./home.scss";
import image from "../assets/image.jpg";

const Home = ({ mainOffers }) => {
  // const id = mainOffers.offers[0]._id;

  return (
    <div className="home">
      <img className="mainImg" src={image} alt="ok" />
      {mainOffers.offers.map((offer, index) => {
        return (
          <Link key={index} to={`/offer/${offer._id}`}>
            <div className="container">
              {offer.owner && (
                <div className="user">
                  {offer.owner.account.avatar && (
                    <img src={offer.owner.account.avatar.secure_url} alt="ok" />
                  )}
                  {offer.owner.account.username}
                </div>
              )}
              {offer.product_image ? (
                <img src={offer.product_image.secure_url} alt="" />
              ) : (
                <img src={offer.product_pictures.secure_url} alt="" />
              )}

              <div className="homeOffer">
                <p className="offerPriceOne">{offer.product_price}$</p>
                <p className="offerInfoOne">
                  {offer.product_details[1].TAILLE}
                </p>
                <p className="offerInfoOne">
                  {offer.product_details[0].MARQUE}
                </p>
              </div>
              <> </>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Home;
