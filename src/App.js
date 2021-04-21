import { useState } from "react";
import "./App.css";
import Quiz from "./components/Quiz";
import ProgressBar from "./components/ProgressBar";

function App() {
  return (
    <div className="App">
      <Quiz />
      <ProgressBar />
    </div>
  );
}

export default App;
