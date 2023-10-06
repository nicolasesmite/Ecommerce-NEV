import React, { useContext, useEffect, useState } from "react";
import { db } from "../../../../firebaseConfig";
import { getDocs, collection, query, where } from "firebase/firestore";
import { AuthContext } from "../../../context/AuthContext";
import UserOrdersContainer from "./UserOrdersContainer";

const UserOrders = () => {
  const [myOrders, setMyOrders] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const orderCollectios = collection(db, "orders");
    let ordersFiltered = query(
      orderCollectios,
      where("buyer.email", "==", user.email)
    );
    getDocs(ordersFiltered)
      .then((res) => {
        const newArray = res.docs.map((order) => {
          return { ...order.data(), id: order.id };
        });

        setMyOrders(newArray);
      })
      .catch((error) => console.log(error));
  }, [user.email]);

  return <UserOrdersContainer myOrder={myOrders} />;
};

export default UserOrders;
