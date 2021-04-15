import { useEffect, useState } from "react";

function Food() {
  const [showFood, setShowFood] = useState("");
  function getFood() {
    fetch("https:/www.themealdb.com/api/json/v1/1/random.php")
      .then((res) => res.json())
      .then((data) => setShowFood(data.meals));
  }

  useEffect(getFood, []);

  return (
    <div>
      <h1>{showFood[0].strMeal} </h1>
      <img src={showFood[0].strMealThumb} alt="" />
    </div>
  );
}

export default Food;
