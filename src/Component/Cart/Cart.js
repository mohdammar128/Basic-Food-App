import { useContext } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../store/CartContext";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    console.log("Adding", item);
    cartCtx.addItem({ ...item, amount: 1 });
  };
  const ItemsInCart = (
    <ul className={cartCtx.items.length !== 0 && classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const hideButtonHandler = () => {
    props.onHideCart();
  };
  return (
    <Modal>
      {ItemsInCart}

      <div className={classes.total}>
        <span>Total amount</span>
        <span>${cartCtx.totalAmount.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={hideButtonHandler}>
          close
        </button>
        {cartCtx.items.length !== 0 && (
          <button className={classes["button--order"]}> order </button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
