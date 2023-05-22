import { useContext } from "react";
import classes from "./MealItem.module.css";
import MealItemForum from "./MealItemForum";
import CartContext from "../../../store/CartContext";
const MealItem = (props) => {
  const cartCtx = useContext(CartContext);
  const addToCartHandler = (amount) => {
    console.log("In meal item js", amount);
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <div className={classes["meal-container"]}>
      <li className={classes["meal-container_list"]}>
        <h3 className={classes["label"]}>{props.name}</h3>
        <div className={classes["description"]}>{props.description}</div>
        <div className={classes["price"]}>${props.price}</div>
      </li>
      <MealItemForum onAddToCart={addToCartHandler} />
    </div>
  );
};

export default MealItem;
