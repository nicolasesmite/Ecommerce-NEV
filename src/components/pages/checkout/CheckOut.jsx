import React from "react";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import { useState } from "react";
import axios from "axios";
import { AuthContext } from "../../../context/AuthContext";
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { db } from "../../../../firebaseConfig";
import {
  addDoc,
  collection,
  updateDoc,
  doc,
  serverTimestamp,
} from "firebase/firestore";

const CheckOut = () => {
  const { cart, getTotalPrice, clearCart } = useContext(CartContext);
  const { user } = useContext(AuthContext);

  initMercadoPago(import.meta.env.VITE_PUBLIC_KEY_MP, {
    locale: "es-UY",
  });

  const [preferenceId, setPreferenceId] = useState(null);
  const [userData, setUserData] = useState({
    cp: "",
    tel: "",
  });

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const paramValue = queryParams.get("status");
  const [orderId, setOrderId] = useState(null);

  useEffect(() => {
    let order = JSON.parse(localStorage.getItem("order"));

    if (paramValue === "approved") {
      let orderCollectios = collection(db, "orders");
      addDoc(orderCollectios, { ...order, date: serverTimestamp() }).then(
        (res) => {
          setOrderId(res.id);
        }
      );

      order.forEach((element) => {
        updateDoc(doc(db, "products", element.id), {
          stock: element.stock - element.quantity,
        });
      });

      localStorage.removeItem("order");
      clearCart();
    }
  }, [paramValue]);

  let total = getTotalPrice();

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
          shipment_cost: 1,
        }
      ); //post a api de mercadopago

      const { id } = response.data; //Axios nos trae data luego del post
      return id;
    } catch (error) {
      console.log(error);
    }
  };

  const handleBuy = async () => {
    let order = {
      cp: userData.cp,
      tel: userData.tel,
      items: cart,
      totalPrice: total,
      email: user.email,
    };
    localStorage.setItem("order", JSON.stringify(order));
    const id = await createPreference();

    console.log(order.totalPrice);

    if (id) {
      setPreferenceId(id);
    }
  };

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  return (
    <div className="container-checkout">
      {!orderId ? (
        <div className="container-checkout-data">
          <input
            name="codigo-Postal"
            aria-label="codigo-postal"
            onChange={handleChange}
            placeholder="Codigo Postal"
          />
          <input
            name="telefono"
            aria-label="telefono"
            onChange={handleChange}
            placeholder="Ingrese su telefono"
          />
          <button className="button-checkout-wallet" onClick={handleBuy}>
            Seleccionar metodo de pago
          </button>
        </div>
      ) : (
        <div className="container-checkout-orderDetail">
          <h2>El pago se realizo con exito</h2>
          <h2>Su numero de compra es {orderId}</h2>
          <Link to="/shop">Seguir comprando</Link>
        </div>
      )}
      {preferenceId && (
        <Wallet initialization={{ preferenceId, redirectMode: "self" }} />
      )}
    </div>
  );
};

export default CheckOut;
