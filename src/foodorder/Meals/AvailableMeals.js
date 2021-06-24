import React, { useEffect, useState } from "react";
import styles from "./AvailableMeals.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const MEAL_API_URL = "https://react-demo-8d4f0.firebaseio.com/meals.json";
const AvailableMeals = () => {
  const [mealsData, setMealsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMeals = async () => {
      const res = await fetch(MEAL_API_URL);

      const responseData = await res.json();
      const loadedMeals = [];
      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }
      setMealsData(loadedMeals);
      setIsLoading(false);
    };

    fetchMeals().catch((err) => {
      setIsLoading(false);
      setError("Something went wrong!");
    });
  }, []);
  // console.log(mealsData);

  const mealList = mealsData.map((it) => (
    <MealItem
      id={it.id}
      key={it.id}
      name={it.name}
      description={it.description}
      price={it.price}
    />
  ));

  if (isLoading) {
    return <p className={styles["meals-loading"]}>Loading...</p>;
  }

  if (error) {
    return <p className={styles["meals-error"]}>{error}</p>;
  }

  return (
    <section className={styles.meals}>
      <Card>
        <ul>{mealList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
