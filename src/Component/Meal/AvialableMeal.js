import React from "react";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeal.module.css";
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.09,
  },
  {
    id: "m2",
    name: "Burger",
    description: "Juicy beef patty with fresh toppings",
    price: 12.99,
  },
  {
    id: "m3",
    name: "Pizza",
    description: "Delicious pizza with various toppings",
    price: 15.49,
  },
  {
    id: "m4",
    name: "Pasta",
    description: "Italian pasta with flavorful sauce",
    price: 10.99,
  },
  {
    id: "m5",
    name: "Salad",
    description: "Fresh greens with a variety of dressings",
    price: 8.99,
  },
  {
    id: "m6",
    name: "Steak",
    description: "Tender and juicy steak cooked to perfection",
    price: 26.99,
  },
  {
    id: "m7",
    name: "Chicken Curry",
    description: "Spicy and aromatic chicken curry",
    price: 14.99,
  },
  {
    id: "m8",
    name: "Sushi Rolls",
    description: "Assorted sushi rolls with different fillings",
    price: 18.99,
  },
  {
    id: "m9",
    name: "Sandwich",
    description: "Classic sandwich with a variety of fillings",
    price: 6.99,
  },
  {
    id: "m10",
    name: "Soup",
    description: "Hot and comforting soup with seasonal ingredients",
    price: 7.99,
  },
];

const AvialableMeals = (props) => {
  const mealList = DUMMY_MEALS.map((meal) => (
    <>
      <MealItem
        key={meal.id}
        id={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      />
      <hr />
    </>
  ));
  return (
    <section className={classes["avialable-meal"]}>
      <Card>
        <ul>{mealList}</ul>
      </Card>
    </section>
  );
};
export default AvialableMeals;
