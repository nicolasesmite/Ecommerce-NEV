import React from "react";
import { Button } from "@mui/material";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { Link } from "react-router-dom";

export const Cart = ({ cart }) => {
  const { addOne, subOne, clearCart, deleteById, getTotalPrice } =
    useContext(CartContext);
  return (
    <>
      <div>Estoy en el carrito</div>
      <Button variant="contained" onClick={clearCart}>
        Limpiar Carrito
      </Button>
      {cart.map((product) => {
        return (
          <div key={product.id}>
            <h1>{product.name}</h1>
            <div>
              <img src={`${product.img}`} style={{ width: "50px" }} />
              <h3>{product.quantity}</h3>
            </div>
            <Button variant="contained" onClick={addOne}>
              +
            </Button>
            <Button variant="contained" onClick={subOne}>
              -
            </Button>
            <Button variant="contained" onClick={() => deleteById(product.id)}>
              Eliminar articulos
            </Button>
          </div>
        );
      })}
      <h2>
        {cart && getTotalPrice() && (
          <Link to={"/checkOut"}>Finalizar compra</Link>
        )}
      </h2>
    </>
  );
};
