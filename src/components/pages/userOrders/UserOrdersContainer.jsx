import React from "react";
import { Link } from "react-router-dom";
import "./UserOrders.css";
const UserOrdersContainer = ({ myOrder }) => {
  return (
    <div className="container-orders">
      {myOrder.lenght > 0 ? (
        myOrder.map((order) => {
          return (
            <div className="container-order-orders" key={order.id}>
              <h2 className="h2-title-orders">Mis ordenes</h2>
              <h2>${order.total}</h2>
            </div>
          );
        })
      ) : (
        <h3 className="h3-noOrders-orders">Parece que aún no tienes ordenes</h3>
      )}
      {myOrder.lenght === 0 && (
        <img src="https://res.cloudinary.com/dxb4thu1x/image/upload/v1697911872/image_tjacsx.png" />
      )}

      <h2 className="h2-seguir-comprando-orders">
        <Link to="/shop">Ir a comprar</Link>
      </h2>
    </div>
  );
};

export default UserOrdersContainer;
