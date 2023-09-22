import React from "react";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { Cart } from "./Cart";

const CartContainer = () => {
  const { cart } = useContext(CartContext);

  return <Cart cart={cart}></Cart>;
};

export default CartContainer;
