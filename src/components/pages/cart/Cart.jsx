import React from "react";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { Link } from "react-router-dom";
import "./Cart.css";

export const Cart = ({ cart }) => {
  const { addOne, subOne, clearCart, deleteById, getTotalPrice } =
    useContext(CartContext);
  return (
    <div className="container-cart">
      <h2 className="h2-cart-title">Mi Carrito</h2>
      <button className="button-cart-clean" onClick={clearCart}>
        Limpiar Carrito
      </button>
      {cart.map((product) => {
        return (
          <div className="container-product-cart" key={product.id}>
            <h1>{product.name}</h1>
            <div className="container-cart-2">
              <img src={`${product.img}`} style={{ width: "50px" }} />
              <h3>{product.quantity}</h3>
            </div>
            <button className="button-cart-add" onClick={addOne}>
              + Agregar
            </button>
            <button className="button-cart-delete" onClick={subOne}>
              - Quitar
            </button>
            <button
              className="button-cart-remove"
              onClick={() => deleteById(product.id)}
            >
              Eliminar articulos
            </button>
          </div>
        );
      })}
      <h2 className="h2-cart-finish">
        {cart && getTotalPrice() && (
          <Link to="/checkOut">Finalizar compra</Link>
        )}
      </h2>
    </div>
  );
};
