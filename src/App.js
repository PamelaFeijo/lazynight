import { useState } from "react";
import "./App.css";
import "./styles.css";
import Movie from "./components/Movie";
import Food from "./components/Food";
import { Switch, Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Home from "./components/Home";
import MovieDatabase from "./components/MovieDatabase";
// import Random from "./components/RandomMovie";
import Footer from "./components/Footer";
import QuizButton from "./components/QuizButton";
import Quiz from "./components/Quiz.js";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";

library.add(fab, faCheckSquare, faCoffee);

function App() {
  const [showMovie, setShowMovie] = useState("");
  const [showFood, setShowFood] = useState("");

  // // Random Movie Function
  // function RandomMovie() {
  //   let j = Math.floor(Math.random() * 17) + 0;
  //   return Random[j];
  // }

  // FETCHES WITH API KEYS

  // function getMovie() {
  //   fetch("http://www.omdbapi.com/?i=" + RandomMovie() + "&apikey=be19834b")
  //     .then((res) => res.json())
  //     .then((data) => setShowMovie(data));
  // }

  // function getFood() {
  //   fetch("https://www.themealdb.com/api/json/v2/9973533/random.php")
  //     .then((res) => res.json())
  //     .then((dataf) => setShowFood(dataf.meals[0]));
  // }

  return (
    <div className="App page-container">
      <div className="content-wrap">
        <Header />

        <Switch>
          <Route exact path="/" component={QuizButton} />
          <Route exact path="/food-quiz" component={Quiz} />
          {/* <Route path="/food">
          <Food showFood={showFood} getFood={getFood} />
        </Route>
        <Route path="/movie">
          <Movie showMovie={showMovie} getMovie={getMovie} />
        </Route> */}
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </div>
    </div>
  );
}

export default App;
