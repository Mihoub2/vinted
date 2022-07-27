import { Link } from "react-router-dom";

const Home = ({ mainOffers }) => {
  // const id = mainOffers.offers[0]._id;

  return (
    <div className="page home">
      {mainOffers.offers.map((offer) => {
        console.log(mainOffers);
        return (
          <div
            className="container"
            onClick={() => {
              <Link to={`/product/${offer._id}`}> {offer._id}</Link>;
            }}
          >
            {/* <p>{offer.owner.account.username}</p>
            {console.log(offer.owner.account.username)} */}
            <p>
              <img src={offer.product_pictures[0].url} alt="" />
            </p>{" "}
            <p>{offer.product_price}$</p>
            <p>{offer.product_details[1].TAILLE}</p>
            <p>{offer.product_details[0].MARQUE}</p>
            <> </>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
