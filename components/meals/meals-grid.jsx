import MealItem from "@/app/meals/meal-item";
import classes from "./meals-grid.module.css";

export default function MealsGrid({ meals }) {
  /**
   * {...items} 문법
   * - 객체의 모든 속성을 전달할 때 사용
   */

  return (
    <ul className={classes.meals}>
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
}
