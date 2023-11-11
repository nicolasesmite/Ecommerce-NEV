import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

const CartContextComponent = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

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
      localStorage.setItem("cart", JSON.stringify(newArray));
      setCart(newArray);
    } else {
      localStorage.setItem("cart", JSON.stringify([...cart, product]));
      setCart([...cart, product]);
    }
  };

  const getQuantityById = (id) => {
    let product = cart.find((element) => element.id === id);

    return product?.quantity;
  };

  const deleteAnUnit = (id) => {
    let product = cart.find((element) => element.id === id);

    if (product.quantity > 1) {
      product.quantity = product.quantity - 1;
    } else {
      let newArray = cart.filter((element) => element.id !== id);
      localStorage.setItem("cart", JSON.stringify(newArray));
      setCart(newArray);
    }
  };
  const clearCart = () => {
    localStorage.removeItem("cart");
    setCart([]);
  };

  const deleteById = (id) => {
    const newArray = cart.filter((element) => element.id !== id);
    localStorage.setItem("cart", JSON.stringify(newArray));
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
    deleteAnUnit,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextComponent;
