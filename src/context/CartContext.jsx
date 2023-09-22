import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

const CartContextComponent = ({ children }) => {
  const [cart, setCart] = useState([]);
  const exist = some.cart((element) => element.id === product.id);
  //   const addToCart = (product) => {
  //     exist ? let newArray = cart.map((element)=>{
  //         element.id === product.id ? : return element
  //     }) : setCart([...cart, product]);
  //   };

  let data = { cart, setCart, addToCart };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextComponent;
