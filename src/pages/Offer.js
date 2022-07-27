import { useParams } from "react-router-dom";

const Offer = () => {
  const { offerID } = useParams();
  return (
    <div className="page offer">
      <div className="offersList">
        <h2>Offert component : {offerID}</h2>
      </div>
    </div>
  );
};

export default Offer;
