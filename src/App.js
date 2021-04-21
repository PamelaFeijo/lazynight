import { useState } from "react";
import "./App.css";
import Movie from "./components/Movie";
import Food from "./components/Food";
import Quiz from "./components/Quiz";
import ProgressBar from "./components/ProgressBar";

function App() {
  const [showMovie, setShowMovie] = useState("");
  const [showFood, setShowFood] = useState("");

  function getMovie() {
    fetch("https:/www.omdbapi.com/?i=tt3896198&apikey=be19834b")
      .then((res) => res.json())
      .then((data) => setShowMovie(data));
  }

  function getFood() {
    fetch("https:/www.themealdb.com/api/json/v1/1/random.php")
      .then((resp) => resp.json())
      .then((dataf) => setShowFood(dataf.meals[0]));
  }

  return (
    <div className="App">
      <Movie showMovie={showMovie} getMovie={getMovie} />
      <Food showFood={showFood} getFood={getFood} />
      <Quiz />
      <ProgressBar />
    </div>
  );
}

export default App;
