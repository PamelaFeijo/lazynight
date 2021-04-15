import { useState } from "react";
import "./App.css";

function App() {
  fetch("https:/www.themealdb.com/api/json/v1/1/random.php")
    .then((res) => res.json())
    .then((data) => console.log(data));

  return <div className="App"></div>;
}

export default App;
