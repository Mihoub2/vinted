import { Link } from "react-router-dom";

const Home = ({ mainOffers }) => {
  // const id = mainOffers.offers[0]._id;

  return (
    <div className="page home">
      {mainOffers.offers.map((offer, index) => {
        return (
          <Link key={index} to={`/offer/${offer._id}`}>
            <div className="container">
              {offer.owner && (
                <div className="user">
                  <img src={offer.owner.account.avatar.secure_url} alt="ok" />
                  {offer.owner.account.username}
                </div>
              )}
              <p>
                <img src={offer.product_pictures[0].secure_url} alt="" />
              </p>{" "}
              <p>{offer.product_price}$</p>
              <p>{offer.product_details[1].TAILLE}</p>
              <p>{offer.product_details[0].MARQUE}</p>
              <> </>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Home;
