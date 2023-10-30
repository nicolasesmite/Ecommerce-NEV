import React from "react";
import { Link } from "react-router-dom";
import "./ItemList.css";

const ItemList = ({ products }) => {
  return (
    <div className="container-itemList">
      {products.map((product) => {
        return (
          <div className="container-item-itemList" key={product.id}>
            <h2 className="item-title">{product.name}</h2>
            <img src={`${product.img}`} />
            <div className="container-details">
              <h2>${product.unit_price}</h2>
              {product.stock > 0 ? (
                <h4>{product.stock} unidades disponibles</h4>
              ) : (
                <h4>No hay unidades en stock</h4>
              )}
              <Link to={`itemDetail/${product.id}`} className="link-detalles">
                Ver detalles
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
