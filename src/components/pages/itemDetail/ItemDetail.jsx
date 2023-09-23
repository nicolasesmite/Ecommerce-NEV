import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../../../firebaseConfig";
import { getDoc, collection, doc } from "firebase/firestore";
import ItemDetailContainer from "./ItemDetailContainer";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

const ItemDetail = () => {
  const { id } = useParams();

  const [productDetail, setProductDetail] = useState({});
  const { addToCart, getQuantityById } = useContext(CartContext);
  let quantity = getQuantityById(id);
  const [counter, setCounter] = useState(quantity || 1);

  useEffect(() => {
    let refCollection = collection(db, "products");
    let refDoc = doc(refCollection, id);

    getDoc(refDoc)
      .then((res) => setProductDetail({ ...res.data(), id: res.id }))
      .catch((error) => console.log(error));
  }, [id]);

  const addOne = () => {
    counter < productDetail.stock
      ? setCounter(counter + 1)
      : alert("Agregaste todos los disponibles");
  };

  const subOne = () => {
    counter > 1
      ? setCounter(counter - 1)
      : alert("no se puede agregar menos de 1 al carrito");
  };

  const onAdd = () => {
    let obj = {
      ...productDetail,
      quantity: counter,
    };

    addToCart(obj);
  };

  const data = {
    productDetail,
    counter,
    addOne,
    subOne,
    onAdd,
    addToCart,
    quantity,
  };

  return <ItemDetailContainer data={data} />;
};

export default ItemDetail;
