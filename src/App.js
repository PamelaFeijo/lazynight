import { useState } from "react";
import "./App.css";
import "./styles.css";
import Movie from "./components/Movie";
import Food from "./components/Food";
import { Switch, Route } from "react-router-dom";
import About from "./components/About";
import Header from "./components/Header";
import Home from "./components/Home";
import MovieDatabase from "./components/MovieDatabase";
import Random from "./components/RandomMovieOption";
import Footer from "./components/Footer";


function App() {
  const [genre , setGenre ] = useState("");
  const [showMovie, setShowMovie] = useState("");
  const [showFood, setShowFood] = useState("");

 
  function getFood() {
    fetch("https:/www.themealdb.com/api/json/v1/1/random.php")
      .then((resp) => resp.json())
      .then((dataf) => setShowFood(dataf.meals[0]));
  }


  //Random Movie Function
  function RandomMovie() {
    let i = Math.floor(Math.random() * 7) + 0;
    if (genre === "comedy"){
        return MovieDatabase.comedy[i]
      }
    else if (genre === "action"){
        return MovieDatabase.action[i]
      }
      else if (genre === "rom"){
        return MovieDatabase.rom[i]
      }
    else{
        let j = Math.floor(Math.random() * 17) + 0;
        return Random[j]
      }     
   }


  // FETCHES WITH API KEYS
  
  function getMovie() {
    fetch("http://www.omdbapi.com/?i=" + RandomMovie() + "&apikey=be19834b")
      .then((res) => res.json())
      .then((data) => setShowMovie(data));
  }

 
  return (
    <div className="App page-container">
      <div className="content-wrap">
        <Header />        
      </div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/food">
          <Food showFood={showFood} getFood={getFood} />
        </Route>
        <Route path="/movie">
          <Movie showMovie={showMovie} getMovie={getMovie} setGenre={setGenre}/>
        </Route>
        <Route path="/about" component={About} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
