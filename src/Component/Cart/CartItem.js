import classes from "./CartItem.module.css";
const CartItem = (props) => {
  return (
    <>
      <li className={classes["cart-item"]}>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className="price">${props.price}</span>
          <span className="amount">x {props.amount}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={props.onRemove}>-</button>
          <button onClick={props.onAdd}>+</button>
        </div>
      </li>
      <hr />
    </>
  );
};
export default CartItem;
