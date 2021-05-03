import { useState } from "react";
import "./App.css";
import "./styles.css";
import Movie from "./components/Movie";
import Food from "./components/Food";
import { Switch, Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
//import Home from "./components/Home";
import MovieDatabase from "./components/MovieDatabase";
import Random from "./components/RandomMovieOption";
import FoodDatabase from './FoodDatabase';
import RandomFoodDatabase from "./components/RandomFoodDatabase";
import Footer from "./components/Footer";
import QuizButton from "./components/QuizButton";
//import Quiz from "./components/Quiz.js";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";

library.add(fab, faCheckSquare, faCoffee);

function App() {
  const [genre , setGenre ] = useState("");
  const [decade , setDecade ] = useState("");
  const [showMovie, setShowMovie] = useState(""); 
  const [showMovieResult, setShowMovieResult] = useState(false);
  const [showFood, setShowFood] = useState("");
  const [type , setType ] = useState("");
  const [ingredient, setIngredient ] = useState("");
  const [showFoodResult, setShowFoodResult] = useState(false);

 
  
  //Random Movie Function
  function RandomMovie() {
    let i = Math.floor(Math.random() * 7) + 0;
    if (genre === "comedy"){
      if(decade === "90s"){
        return MovieDatabase.comedy[0][i]
      }
      else if(decade === "2000s"){
        return MovieDatabase.comedy[1][i]
      }  
      else if(decade === "2010s"){
        return MovieDatabase.comedy[2][i]
      }
      }
    else if (genre === "action"){
      if(decade === "90s"){
        return MovieDatabase.action[0][i]
      }
      else if(decade === "2000s"){
        return MovieDatabase.action[1][i]
      }  
      else {
        return MovieDatabase.action[2][i]
      }
      }
      else if (genre === "rom"){
        if(decade === "90s"){
          return MovieDatabase.rom[0][i]
        }
        else if(decade === "2000s"){
          return MovieDatabase.rom[1][i]
        }  
        else {
          return MovieDatabase.rom[2][i]
        }
      }
    else{
        let j = Math.floor(Math.random() * 63) + 0;
        return Random[j]
      }     
   }

    // FETCHES WITH API KEYS

  function getMovie() {
    fetch("http://www.omdbapi.com/?i=" + RandomMovie() + "&apikey=be19834b")
      .then((res) => res.json())
      .then((data) => {setShowMovie(data) ; setShowMovieResult(true)});
  }

  function getFood() {
    fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + RandomFood())
      .then((resp) => resp.json())
      .then((dataf) => {setShowFood(dataf.meals[0]) ; setShowFoodResult(true)});
  } 

   //Random Food
   function RandomFood() {
    let i = Math.floor(Math.random() * 6) + 0;
    if (type === "chicken"){
      if(ingredient === "mediterranean"){
        return FoodDatabase.chicken[0][i]
      }
      else if(ingredient === "american"){
        return FoodDatabase.chicken[1][i]
      }  
      else {
        return FoodDatabase.chicken[2][i]
      }
      }
    else if (type === "beef"){
      if(ingredient === "mediterranean"){
        return FoodDatabase.beef[0][i]
      }
      else if(ingredient === "american"){
        return FoodDatabase.beef[1][i]
      }  
      else {
        return FoodDatabase.beef[2][i]
      }
      }
      else if (type === "vegetarian"){
        if(ingredient === "mediterranean"){
          return FoodDatabase.vegetarian[0][i]
        }
        else if(ingredient === "american"){
          return FoodDatabase.vegetarian[1][i]
        }  
        else {
          return FoodDatabase.vegetarian[2][i]
        }
      }
    else{
        let j = Math.floor(Math.random() * 15) + 0;
        return RandomFoodDatabase[j]
      }     
   }   

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
          <Route path="/food">           
          <Food showFood={showFood} getFood={getFood} type={type} setType={setType} ingredient={ingredient} setIngredient={setIngredient} showFoodResult={showFoodResult} /> 
          </Route>
          <Route path="/movie">
            <Movie showMovie={showMovie} getMovie={getMovie} genre={genre} setGenre={setGenre} decade={decade} setDecade={setDecade} showMovieResult={showMovieResult}/>
          </Route>
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      <Footer />
    </div>
    </div>
  );
}

export default App;
