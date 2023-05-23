import { useReducer, useEffect } from "react";
import CartContext from "./CartContext";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    let updatedItems;
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  } else if (action.type === "REMOVE") {
    let updatedItems;
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.itemId
    );
    const existingCartItem = state.items[existingCartItemIndex]; //object

    if (existingCartItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.itemId);
    } else {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount - 1,
      };

      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }
    const updatedTotalAmount = state.totalAmount - existingCartItem.price;
    const adjustedTotalAmount = Math.max(updatedTotalAmount, 0);
    return {
      items: updatedItems,
      totalAmount: adjustedTotalAmount,
    };
  }
  return defaultCartState;

  // ... handle other actions if needed
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemsToCartHandler = (items) => {
    dispatchCartAction({ type: "ADD", item: items });
  };

  const removeItemsfromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", itemId: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemsToCartHandler,
    removeItem: removeItemsfromCartHandler,
    // ... other methods
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
