import React from "react";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import { useState } from "react";
import axios from "axios";

const Checkout = () => {
  const { cart } = useContext(CartContext);
  initMercadoPago(import.meta.env.VITE_PUBLIC_KEY_MP, {
    locale: "es-UY",
  });

  const [preferenceId, setPreferenceId] = useState(null);

  const createPreference = async () => {
    const newArray = cart.map((product) => {
      return {
        name: product.name,
        unit_price: product.unit_price,
        quantity: product.quantity,
      };
    });

    try {
      let response = await axios.post(
        "http://localhost:8080/create_preference",
        {
          items: newArray,
          shipment_cost: 100,
        }
      ); //post a api de mercadopago

      const { id } = response.data; //Axios nos trae data luego del post
      return id;
    } catch (error) {
      console.log(error);
    }
  };

  const handleBuy = async () => {
    const id = await createPreference();

    id && setPreferenceId(id);
  };

  return (
    <div>
      <button onClick={handleBuy}>Seleccionar metodo de pago</button>
      {preferenceId && (
        <Wallet initialization={{ preferenceId, redirectMode: "self" }} />
      )}
    </div>
  );
};

export default Checkout;
