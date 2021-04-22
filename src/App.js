import { useState } from "react";
import "./App.css";
import "./styles.css";
import Movie from "./components/Movie";
import Food from "./components/Food";
import Navbar from "./components/Navbar";
import { Switch, Route } from 'react-router-dom';
import About from "./components/About";
import Home from "./components/Home";


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
        <Navbar />                 
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/food'>
            <Food showFood={showFood} getFood={getFood}/>
          </Route>  
          <Route path='/movie'>
             <Movie showMovie={showMovie} getMovie={getMovie}/>
          </Route>
          <Route path='/about' component={About} />
        </Switch>      
     
    </div>
  );
}

export default App;
