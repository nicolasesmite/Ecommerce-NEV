import React, { useEffect, useState } from "react";
import { db } from "../../../../firebaseConfig";
import { getDocs, collection } from "firebase/firestore";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [counter, setCounter] = useState();

  useEffect(() => {
    let refCollection = collection(db, "products");
    getDocs(refCollection)
      .then((res) => {
        let newArray = res.docs.map((product) => {
          return { ...product.data(), id: product.id };
        });

        setProducts(newArray);
      })
      .catch((err) => console.log(err));
  }, []);

  return <ItemList products={products} />;
};

export default ItemListContainer;
