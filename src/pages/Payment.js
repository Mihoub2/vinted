import CheckoutForm from "../components/CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useLocation } from "react-router-dom";
import "./payment.scss";

const stripePromise = loadStripe(
  "pk_test_51HCObyDVswqktOkX6VVcoA7V2sjOJCUB4FBt3EOiAdSz5vWudpWxwcSY8z2feWXBq6lwMgAb5IVZZ1p84ntLq03H00LDVc2RwP"
);

const Payment = () => {
  const location = useLocation();
  const price = location.state.price;
  const name = location.state.productName;

  const protectfees = 0.8 % price;
  const fees = 1 % price;
  const total = protectfees + fees + price;

  console.log(location);
  return (
    <div className="globalPayment">
      <div className="blockPayment">
        <div className="firstBlock">
          <p className="paymentTitle"> Résumé de la commande</p>
          <p>
            Commande
            <span className="price">{price}$</span>
          </p>
          <p>
            Frais protection acheteurs{" "}
            <span className="price">{protectfees}$</span>
          </p>
          <p>
            Frais de port <span className="price">{fees}$</span>
          </p>
        </div>
        <div>
          <p className="paymentTotal">
            Total <span className="price">{total}$</span>
          </p>
          <p className="paymentText">
            Il ne vous reste plus qu'un étape pour vous offrir {name}. Vous
            allez payer {total}$$ (frais de protection et frais de port inclus).
          </p>
        </div>
        <div className="payment">
          <Elements stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
