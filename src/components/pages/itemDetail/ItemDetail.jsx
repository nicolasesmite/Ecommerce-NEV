import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../../../firebaseConfig";
import { getDoc, collection, doc } from "firebase/firestore";
import ItemDetailContainer from "./ItemDetailContainer";

const ItemDetail = () => {
  const { id } = useParams();
  const [counter, setCounter] = useState(1);

  const [productDetail, setProductDetail] = useState({});

  useEffect(() => {
    let refCollection = collection(db, "products");
    let refDoc = doc(refCollection, id);

    getDoc(refDoc)
      .then((res) => setProductDetail({ ...res.data(), id: res.id }))
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <ItemDetailContainer productDetail={productDetail} counter={counter} />
  );
};

export default ItemDetail;
