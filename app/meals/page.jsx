import Link from "next/link";

const Meals = () => {
  return (
    <div>
      <h1>This is Meals Page!!</h1>
      <p>
        <Link href="/meals/share">Share</Link>
      </p>
      <p>
        <Link href="/meals/meal1">Meal1</Link>
      </p>
      <p>
        <Link href="/meals/meal2">Meal2</Link>
      </p>
    </div>
  );
};

export default Meals;
