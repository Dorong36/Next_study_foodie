import Link from "next/link";
import classes from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";
import { Suspense } from "react";
import MealsLoadingPage from "./loading-out";

/**
 * 데이터를 관리하는 부분을 밖으로 아웃소싱 했다는 장점
 */
async function Meals() {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
}

const MealsPage = () => {
  /**
   * Server component이기 때문에 async 함수로 작성이 가능!!
   */
  const meals = getMeals();

  /**
   * Suspense는 React에서 제공하는 컴포넌트
   * 일부 데이터 또는 리소스가 불러와질 때까지 로딩 상태를 처리하고 대체 컨텐츠를 표시
   */
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>
          Choose your favorite meal and cook it yourself. It is easy and fun!
        </p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share Your Favorite Recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense
          fallback={<p className={classes.loading}>Fetching meals...</p>}
        >
          <Meals />
        </Suspense>
      </main>
    </>
  );
};

export default MealsPage;
