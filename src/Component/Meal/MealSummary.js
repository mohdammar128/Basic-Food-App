import classes from "./MealSummary.module.css";
const MealSummary = () => {
  return (
    <section className={classes["summary-container"]}>
      <h2>Delicious Food is Delivered To Your</h2>
      <p>
        Choose Your Favourite meal from our broad selection of avialable meals
        and enjoy delicious lunch and dinner
      </p>
      <p>
        All our meals are cooked with high Quality ingredients, just-in-time and
        ofcourse by experienced chefs
      </p>
    </section>
  );
};

export default MealSummary;
