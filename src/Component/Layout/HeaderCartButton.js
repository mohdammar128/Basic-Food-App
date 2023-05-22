import React, { useContext, useEffect } from "react";
import CartIcon from "../Cart/CartIcon";

import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/CartContext";

const HeaderCartButton = (props) => {
  // const [cartButton, setCartButton] = useState(false);
  const cartCtx = useContext(CartContext);

  useEffect(() => {
    console.log("Cart Button", cartCtx.items);
  }, [cartCtx]);

  const numberOfCartItems = cartCtx.items.reduce((curr, item) => {
    return curr + item.amount;
  }, 0);
  const handleCartButton = () => {
    props.onShowCart();
  };
  return (
    <button className={classes["cart-button"]} onClick={handleCartButton}>
      <span className={classes["cart-button_icon"]}>
        <CartIcon />
      </span>
      <span className={classes["cart-button_label"]} onClick={handleCartButton}>
        Add to Cart
      </span>
      <span className={classes["cart-button_count"]}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
