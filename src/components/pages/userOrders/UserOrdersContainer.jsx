import React from "react";
import { Link } from "react-router-dom";
import "./UserOrders.css";
const UserOrdersContainer = ({ myOrder }) => {
  return (
    <div className="container-orders">
      {myOrder.length > 0 ? (
        myOrder.map((order) => {
          return (
            <div key={order.id}>
              <h2 className="h2-title-orders">Mis ordenes</h2>
              <div className="container-order-orders">
                <h2 className="h2-id-orders">Numero de retiro {order.id}</h2>
                <h2 className="h2-total-orders">
                  Total de orden ${order.totalPrice}
                </h2>
              </div>
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
