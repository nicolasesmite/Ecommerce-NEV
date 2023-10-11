import ItemDetail from "../components/pages/itemDetail/ItemDetail";
import Home from "../components/pages/home/Home";
import ItemListContainer from "../components/pages/itemList/ItemListContainer";
import CartContainer from "../components/pages/cart/CartContainer";
import Checkout from "../components/pages/checkout/Checkouth";
import UserOrders from "../components/pages/userOrders/UserOrders";

export const routes = [
  {
    id: "home",
    path: "/",
    Element: Home,
  },
  {
    id: "shop",
    path: "/shop",
    Element: ItemListContainer,
  },
  {
    id: "itemDetail",
    path: "shop/itemDetail/:id",
    Element: ItemDetail,
  },
  {
    id: "cart",
    path: "/cart",
    Element: CartContainer,
  },
  {
    id: "checkout",
    path: "/checkout",
    Element: Checkout,
  },
  {
    id: "userOrders",
    path: "/user-orders",
    Element: UserOrders,
  },
];
