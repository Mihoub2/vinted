import { Link } from "react-router-dom";

const Home = ({ data }) => {
  const id = data.offers.id;

  return (
    <div className="page home">
      <h1>This is Home Page</h1>
      {data.map((mainOffers) => {
        console.log(mainOffers);
        return (
          <div>
            <p>{mainOffers.offers}</p>{" "}
            <>
              {" "}
              <Link to={`/product/${id}`}>
                {" "}
                way to product page with this id : {id}
              </Link>
            </>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
