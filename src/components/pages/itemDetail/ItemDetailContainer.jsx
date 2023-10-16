import React from "react";

const ItemDetailContainer = ({ data }) => {
  const { productDetail, counter, addOne, subOne, onAdd, quantity } = {
    ...data,
  };
  return (
    <div className="container-ItemDetail">
      <h2>{productDetail.name}</h2>
      <img src={`${productDetail.img}`} style={{ width: "50px" }} />
      <div className="container-buttons-ItemDetail">
        <button type="button" onClick={addOne}>
          +
        </button>
        <h3>{counter}</h3>
        <button type="button" onClick={subOne}>
          -
        </button>
        <button type="button" onClick={onAdd}>
          Add to cart
        </button>
      </div>

      {quantity && (
        <h3 className="h3-alert-ItemDetail">
          Ya tienes {quantity} unidades en el carrito
        </h3>
      )}
      {productDetail?.stock === quantity && (
        <h3 className="h3-soldOut-ItemDetail">
          Ya tenes todas las unidades disponibles
        </h3>
      )}
    </div>
  );
};

export default ItemDetailContainer;
