import { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import axios from "axios";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [completed, setCompleted] = useState(false);
  const handlePayment = async (event) => {
    try {
      event.preventDefault();
      const cardInfos = elements.getElement(CardElement);
      const stripeResponse = await stripe.createToken(cardInfos, {
        name: "id",
      });
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/payment",
        {
          token: stripeResponse,
          title: "Le Titre de l'annonce",
          amount: "le prix",
        }
      );

      if (response.data) {
        setCompleted(true);
      }
    } catch (error) {}
  };

  return completed ? (
    <p>Payment confirm!</p>
  ) : (
    <form onSubmit={handlePayment}>
      <CardElement />
      <input type="submit" value="Payer" />
    </form>
  );
};

export default CheckoutForm;
