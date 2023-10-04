import React, { useEffect, useState } from "react";
import { db } from "../../../../firebaseConfig";
import { getDocs, collection, query, where } from "firebase/firestore";

const UserOrders = () => {
  const [myOrders, setMyOrders] = useState([]);

  useEffect(() => {}, []);

  return <div>UserOrders</div>;
};

export default UserOrders;
