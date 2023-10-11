import ItemDetail from "../components/pages/itemDetail/ItemDetail";
import Home from "../components/pages/home/Home";
import ItemListContainer from "../components/pages/itemList/ItemListContainer";
import CartContainer from "../components/pages/cart/CartContainer";
import UserOrders from "../components/pages/userOrders/UserOrders";
import CheckOut from "../components/pages/checkout/CheckOut";

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
    Element: CheckOut,
  },
  {
    id: "userOrders",
    path: "/user-orders",
    Element: UserOrders,
  },
];
