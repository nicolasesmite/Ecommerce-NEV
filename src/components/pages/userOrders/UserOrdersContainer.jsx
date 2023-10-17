import React from "react";

const UserOrdersContainer = ({ myOrder }) => {
  return (
    <div className="container-orders">
      <h2 className="h2-title-orders">Mis ordenes</h2>
      {myOrder.lenght > 0 ? (
        myOrder.map((order) => {
          return (
            <div className="container-order-orders" key={order.id}>
              <h2>${order.total}</h2>
            </div>
          );
        })
      ) : (
        <h3 className="h3-noOrders-orders">Aun no tienes ordenes</h3>
      )}
    </div>
  );
};

export default UserOrdersContainer;
