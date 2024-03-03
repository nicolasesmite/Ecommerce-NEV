import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../../../firebaseConfig";
import { getDoc, collection, doc } from "firebase/firestore";
import ItemDetailContainer from "./ItemDetailContainer";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import swal from "sweetalert2";

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
      : swal.fire({
          title: "Si que te gusta el Mate!",
          text: "Has seleccionado todas nuestras unidades disponibles",
          imageUrl:
            "https://res.cloudinary.com/dxb4thu1x/image/upload/v1709494882/D5Z6q0KXoAAzoE-_1_cdzcqy.jpg",
          imageWidth: 400,
          imageHeight: 200,
          imageAlt: "Custom image",
        });
  };

  const subOne = () => {
    counter > 1
      ? setCounter(counter - 1)
      : swal.fire({
          title: "No hay mate sin mate y bombilla",
          text: "No puedes agregar menos de un articulo al carrito",
          imageUrl:
            "https://res.cloudinary.com/dxb4thu1x/image/upload/v1709494881/D5Z6q0KXoAAzoE-_i7sxrt.jpg",
          imageWidth: 400,
          imageHeight: 200,
          imageAlt: "Custom image",
        });
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
