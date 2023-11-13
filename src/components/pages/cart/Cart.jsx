import React, { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { Link } from "react-router-dom";
import "./Cart.css";

export const Cart = ({ cart }) => {
  const {
    deleteAnUnit,
    addOne,
    clearCart,
    deleteById,
    getTotalPrice,
    getQuantityById,
  } = useContext(CartContext);

  const [counter, setCounter] = useState(null);

  return (
    <div className="container-cart">
      <h2 className="h2-cart-title">Bienvenido a tu carrito</h2>

      {cart.map((product) => {
        return (
          <div className="container-product-cart" key={product.id}>
            <div className="h2-container">
              <h2>{product.name}</h2>
            </div>

            <div className="container-cart-2">
              <img src={`${product.img}`} />
              <div className="quantity-container">
                <h3>Cantidad de articulos {product.quantity}</h3>
              </div>

              <div className="buttons-cart">
                <button className="button-cart-add" onClick={addOne}>
                  + Agregar
                </button>
                <button
                  className="button-cart-delete"
                  onClick={
                    (() => deleteAnUnit(product.id),
                    () => setCounter(product.quantity))
                  }
                >
                  - Quitar
                </button>
                <button
                  className="button-cart-remove"
                  onClick={() => deleteById(product.id)}
                >
                  Eliminar articulo
                </button>
              </div>
            </div>
          </div>
        );
      })}
      <div className="links-container">
        <h2 className="h2-cart-finish">
          {cart && getTotalPrice() && (
            <Link to="/checkOut">Finalizar compra</Link>
          )}
        </h2>
        <button className="button-cart-clean" onClick={clearCart}>
          Limpiar Carrito
        </button>
      </div>
    </div>
  );
};
