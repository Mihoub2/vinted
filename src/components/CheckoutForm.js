import { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import axios from "axios";

const CheckoutForm = ({ total, name }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [completed, setCompleted] = useState(false);

  const handlePayment = async (event) => {
    try {
      event.preventDefault();
      const cardInfos = elements.getElement(CardElement);
      const stripeResponse = await stripe.createToken(cardInfos, {
        name: "Mihoub",
      });

      // Envoi des info de cb à l'api

      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/payment",
        {
          token: stripeResponse.token.id,
          title: name,
          amount: total,
        }
      );

      if (response.data.status === "succeeded") {
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
