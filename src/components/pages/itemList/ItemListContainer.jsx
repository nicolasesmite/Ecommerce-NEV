import React, { useEffect, useState } from "react";
import { db } from "../../../../firebaseConfig";
import { getDocs, collection } from "firebase/firestore";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    let refCollection = collection(db, "products");
  }, []);
  return <div></div>;
};

export default ItemListContainer;
