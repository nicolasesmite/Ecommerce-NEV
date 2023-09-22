import React from "react";

export const Cart = ({ cart }) => {
  return (
    <>
      <div>Estoy en el carrito</div>
      {cart.map((product) => {
        return (
          <div key={product.id}>
            <h1>{product.name}</h1>
            <div>
              <img src={`${product.img}`} style={{ width: "50px" }} />
              <h3>{product.quantity}</h3>
            </div>
          </div>
        );
      })}
    </>
  );
};
