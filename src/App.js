import { useState } from "react";
import "./App.css";
import ProgressBar from "./components/ProgressBar";
import Quiz from "./components/Quiz";

function App() {
  const [done, setDone] = useState(0);
  const [movieQuestion, setMovieQuestion] = useState(0);
  console.log(movieQuestion);

  function handleAddDone() {
    if (movieQuestion < 5) {
      setMovieQuestion(movieQuestion + 1);
      setDone(done + 20);
    }
  }

  function handleCutDone() {
    if (movieQuestion > 1) {
      setMovieQuestion(movieQuestion - 1);
      setDone(done - 20);
    }
  }

  return (
    <div className="App">
      <Quiz
        done={done}
        movieQuestion={movieQuestion}
        handleAddDone={handleAddDone}
        handleCutDone={handleCutDone}
      />
      <ProgressBar
        done={done}
        handleAddDone={handleAddDone}
        handleCutDone={handleCutDone}
      />
    </div>
  );
}

export default App;
