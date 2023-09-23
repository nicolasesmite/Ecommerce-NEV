import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

const CartContextComponent = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const exist = cart.some((element) => element.id === product.id);
    if (exist) {
      let newArray = cart.map((element) => {
        if (element.id === product.id) {
          return { ...element, quantity: product.quantity };
        } else {
          return element;
        }
      });

      setCart(newArray);
    } else {
      setCart([...cart, product]);
    }
  };

  const getQuantityById = (id) => {
    let product = cart.find((element) => element.id === id);

    return product?.quantity;
  };

  const clearCart = () => {
    setCart([]);
  };

  const deleteById = (id) => {
    const newArray = cart.filter((element) => element.id !== id);
    setCart(newArray);
  };

  const getTotalPrice = () => {
    const total = cart.reduce((acc, element) => {
      return acc + element.quantity * element.unit_price;
    }, 0);
    return total;
  };

  let data = {
    cart,
    setCart,
    addToCart,
    getQuantityById,
    clearCart,
    deleteById,
    getTotalPrice,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextComponent;
