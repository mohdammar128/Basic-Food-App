import React, { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";

import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/CartContext";

const HeaderCartButton = (props) => {
  // const [cartButton, setCartButton] = useState(false);
  const cartCtx = useContext(CartContext);
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

  const numberOfCartItems = cartCtx.items.reduce((curr, item) => {
    return curr + item.amount;
  }, 0);
  const handleCartButton = () => {
    props.onShowCart();
  };

  const btnClasses = `${classes["cart-button"]} ${
    btnIsHighlighted ? classes["bump"] : " "
  }`;
  useEffect(() => {
    setBtnIsHighlighted(true);
    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [cartCtx.items]);

  return (
    <button className={btnClasses} onClick={handleCartButton}>
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
