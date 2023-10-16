import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const ItemList = ({ products }) => {
  return (
    <div>
      {products.map((product) => {
        return (
          <div className="conatiner-itemList" key={product.id}>
            <h2>{product.name}</h2>
            <img src={`${product.img}`} />
            <h2>${product.unit_price}</h2>
            {product.stock > 0 ? (
              <h4>{product.stock} unidades disponibles</h4>
            ) : (
              <h4>No hay unidades en stock</h4>
            )}

            <Link to={`itemDetail/${product.id}`}>Ver detalles</Link>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
