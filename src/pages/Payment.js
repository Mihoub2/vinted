import CheckoutForm from "../components/CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useLocation } from "react-router-dom";
import "./payment.scss";

const stripePromise = loadStripe(
  "pk_test_51HCObyDVswqktOkX6VVcoA7V2sjOJCUB4FBt3EOiAdSz5vWudpWxwcSY8z2feWXBq6lwMgAb5IVZZ1p84ntLq03H00LDVc2RwP"
);

const Payment = () => {
  // const location = useLocation();
  // const price = location.state;
  return (
    <div className="globalPayment">
      <div className="blockPayment">
        <div className="firstBlock">
          <p> Résumé de la commande</p>
          <p>
            Commande
            {/* <span>{price}</span> */}
          </p>
          <p> Frais de port</p>
        </div>
        <div>
          <p>Total</p>
          <p>
            Il ne vous reste plus qu'un étape pour vous offrir title. Vous allez
            payer 0 € (frais de protection et frais de port inclus).
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
