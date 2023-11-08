import React from "react";
import "./ItemDetail.css";

const ItemDetailContainer = ({ data }) => {
  const { productDetail, counter, addOne, subOne, onAdd, quantity } = {
    ...data,
  };
  return (
    <div className="container-ItemDetail">
      <h2>{productDetail.name}</h2>
      <img className="img-detail" src={`${productDetail.img}`} />
      <div>{productDetail.detail}</div>
      <div className="container-buttons-ItemDetail">
        <h3>{counter} Unidades seleccionadas</h3>
        <button type="button" className="button-add" onClick={addOne}>
          + Agregar
        </button>

        <button type="button" className="button-quit" onClick={subOne}>
          - Quitar
        </button>
        <button type="button" className="button-cart" onClick={onAdd}>
          Agregar al carrito
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
