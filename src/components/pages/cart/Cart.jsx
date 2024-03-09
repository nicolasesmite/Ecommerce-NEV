import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { Link } from "react-router-dom";
import "./Cart.css";

export const Cart = ({ cart }) => {
  const { clearCart, deleteById, getTotalPrice } = useContext(CartContext);

  return (
    <div className="container-cart">
      <h1 className="h2-cart-title">Bienvenido a tu carrito</h1>

      {cart.map((product) => {
        return (
          <div className="container-product-cart" key={product.id}>
            <div className="h2-container">
              <h2>{product.name}</h2>
            </div>

            <div className="container-cart-2">
              <img src={`${product.img}`} />
              <div className="quantity-container">
                {product.quantity > 1 ? (
                  <h3>{product.quantity} unidades</h3>
                ) : (
                  <h3>{product.quantity} unidad</h3>
                )}
              </div>
            </div>
            <div className="buttons-cart">
              <div className="subTotal-container">
                {product.quantity > 0 && (
                  <h3>Subtotal ${product.quantity * product.unit_price}</h3>
                )}
              </div>
              <button
                className="button-cart-remove"
                onClick={() => deleteById(product.id)}
              >
                Eliminar articulo
              </button>
            </div>
          </div>
        );
      })}

      {cart.length > 0 ? (
        <div className="links-container">
          <div className="links">
            {cart && <h3>Total de la compra ${getTotalPrice()}</h3>}
            <h2 className="h2-cart-finish">
              {cart && getTotalPrice() && (
                <Link to="/checkOut">Finalizar compra</Link>
              )}
            </h2>
            <h2 className="h2-seguir-comprando">
              <Link to="/shop">Seguir comprando</Link>
            </h2>
          </div>

          <button className="button-cart-clean" onClick={clearCart}>
            Limpiar Carrito
          </button>
        </div>
      ) : (
        <div className="carrito-vacio-container">
          <h2>Aún no agregó ningún articulo al carrito </h2>
          <img src="https://res.cloudinary.com/dxb4thu1x/image/upload/v1697911872/image_tjacsx.png" />
          <h2 className="h2-seguir-comprando">
            <Link to="/shop">Seguir comprando</Link>
          </h2>
        </div>
      )}
    </div>
  );
};
