import React from "react";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { Link } from "react-router-dom";

export const Cart = ({ cart }) => {
  const { addOne, subOne, clearCart, deleteById, getTotalPrice } =
    useContext(CartContext);
  return (
    <>
      <h2 className="h2-cart-title">Estoy en el carrito</h2>
      <Button className="button-cart-clean" onClick={clearCart}>
        Limpiar Carrito
      </Button>
      {cart.map((product) => {
        return (
          <div className="container-cart" key={product.id}>
            <h1>{product.name}</h1>
            <div className="container-cart-2">
              <img src={`${product.img}`} style={{ width: "50px" }} />
              <h3>{product.quantity}</h3>
            </div>
            <Button className="button-cart-add" onClick={addOne}>
              +
            </Button>
            <Button className="button-cart-delete" onClick={subOne}>
              -
            </Button>
            <Button
              className="button-cart-remove"
              onClick={() => deleteById(product.id)}
            >
              Eliminar articulos
            </Button>
          </div>
        );
      })}
      <h2 className="h2-cart-finish">
        {cart && getTotalPrice() && (
          <Link to="/checkOut">Finalizar compra</Link>
        )}
      </h2>
    </>
  );
};
