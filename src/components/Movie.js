import React, { useState } from 'react';
import ProgressBar from "./ProgressBar";
import "./Movie.css"

function Movie(props) {
  const { showMovie, getMovie } = props;
  const [movieQuestion, setMovieQuestion] = useState(0);
  const [done, setDone] = useState(0);

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

  const content = [
    {
      question: "Do you want a cat?",
      answerOne: "Yes",
      answerTwo: "No",
      answerThree: "Maybe",
      answerFour: "Don't think so",
    },
    {
      question: "Which letter do you prefer?",
      answerOne: "A",
      answerTwo: "B",
      answerThree: "C",
      answerFour: "D",
    },
    {
      question: "Which number is higher?",
      answerOne: "1",
      answerTwo: "2",
      answerThree: "3",
      answerFour: "4",
    },
    {
      question: "Are you happy?",
      answerOne: "Yes",
      answerTwo: "No",
      answerThree: "Maybe",
      answerFour: "Don't think so",
    },
    {
      question: "Which cat do you want?",
      answerOne: "Anca",
      answerTwo: "Francesco",
      answerThree: "Pamela",
      answerFour: "Anelisy",
    },
    {
      question: "Which cat do you want?",
      answerOne: "Anca",
      answerTwo: "Francesco",
      answerThree: "Pamela",
      answerFour: "Anelisy",
    },
    {
      question: "Which cat do you want?",
      answerOne: "Anca",
      answerTwo: "Francesco",
      answerThree: "Pamela",
      answerFour: "Anelisy",
    },
  ];



  return (
    
    <div>
          <div
      class="quiz-container"
      style={{
        display: done === 100 ? "none" : "flex",
      }}
    >
      <div class="quiz-question">
        <h2>{content[movieQuestion].question}</h2>
      </div>
      <button class="quiz-answer" onClick={handleAddDone}>
        {content[movieQuestion].answerOne}
      </button>
      <button class="quiz-answer" onClick={handleAddDone}>
        {content[movieQuestion].answerTwo}
      </button>
      <button class="quiz-answer" onClick={handleAddDone}>
        {content[movieQuestion].answerThree}
      </button>
      <button class="quiz-answer" onClick={handleAddDone}>
        {content[movieQuestion].answerFour}
      </button>
    </div>
      <button className="movie-btn" onClick={getMovie}>
        Get Movie
      </button>
      <div>
        <img className="small-image" src={showMovie.Poster} alt="" />
      </div>
      <>
    <ProgressBar
          done={done}
          handleAddDone={handleAddDone}
          handleCutDone={handleCutDone}
        />
    </>
    </div>
  );
}
export default Movie;
