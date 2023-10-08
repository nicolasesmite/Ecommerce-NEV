import React from "react";

const UserOrdersContainer = ({ myOrder }) => {
  return (
    <div>
      <h2>Estoy en mis ordenes</h2>

      {myOrder.map((order) => {
        return (
          <div key={order.id}>
            <h2>${order.total}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default UserOrdersContainer;
