import React from "react";
import Button from "@mui/material/Button";

const ItemDetailContainer = ({ data }) => {
  const { productDetail, counter, addOne, subOne, onAdd } = { ...data };
  return (
    <div>
      <div>{productDetail.name}</div>
      <img src={`${productDetail.img}`} style={{ width: "50px" }} />
      <Button variant="contained" onClick={addOne}>
        +
      </Button>
      <div>{counter}</div>
      <Button variant="contained" onClick={subOne}>
        -
      </Button>
      <Button variant="contained" onClick={onAdd}>
        Add to cart
      </Button>
    </div>
  );
};

export default ItemDetailContainer;
