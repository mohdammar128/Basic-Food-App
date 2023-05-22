import { useContext } from "react";
import AvialableMeals from "./AvialableMeal";
import MealSummary from "./MealSummary";
import CartContext from "../../store/CartContext";
const Meal = () => {
  const ctx = useContext(CartContext);
  return (
    <>
      <MealSummary />
      <AvialableMeals />
    </>
  );
};

export default Meal;
