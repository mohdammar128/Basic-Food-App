import React, { Fragment, useState } from "react";
import Cart from "./Component/Cart/Cart";
import Header from "./Component/Layout/Header";
import Meal from "./Component/Meal/Meal";
import CartProvider from "./store/CartProvider";
const CartItem = [{ name: "sushi", price: "22", qunatity: 4 }];
function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <CartProvider>
      <Header onShowCart={showCartHandler} />
      {cartIsShown && <Cart onHideCart={hideCartHandler} />}
      <main>
        <Meal />
      </main>
    </CartProvider>
  );
}

export default App;
