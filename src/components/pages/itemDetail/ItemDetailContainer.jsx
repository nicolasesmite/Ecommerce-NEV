import React from "react";
import Button from "@mui/material/Button";

const ItemDetailContainer = ({ productDetail, counter }) => {
  return (
    <div>
      <div>{productDetail.name}</div>
      <img src={`${productDetail.img}`} style={{ width: "50px" }} />
      <Button variant="contained">+</Button>
      <div>{counter}</div>
      <Button variant="contained">-</Button>
    </div>
  );
};

export default ItemDetailContainer;
