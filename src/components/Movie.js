import React, { useState } from 'react';
import ProgressBar from "./ProgressBar";
import "./Movie.css"

function Movie(props) {
  const { showMovie, getMovie , setGenre } = props;
  const [movieQuestion, setMovieQuestion] = useState(0);
  const [done, setDone] = useState(0);
  // const [result, setResult] = useState(false)


  function handleAddDone(value) {
    if(value === 0){
      setGenre("comedy")
    }
    else if(value === 1){
      setGenre("action")
    }
    else if (value === 2) {
      setGenre("rom")
    }
    

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
      question: "What do you feel like watching tonight?",
      answerOptions: [
        {answer: "Comedy", value : 0},
        {answer: "Action movie", value: 1},
        {answer: "Romance movie", value: 2},
        {answer: "Random", value: 3}
      ]
    },
    {
      question: "How do you feel?",
      answerOptions: [
        {answer: "I miss the 90s" },
        {answer: "2005 was only 5 years ago"},
        {answer: "I should make a Tik Tok right now"},
        {answer: "I feel nothing."}
      ]
    },
    {
      question: "What's your favourite city?",
      answerOptions: [
        {answer: "Paris"},
        {answer: "London"},
        {answer: "Berlin"},
        {answer: "Moscow"}
      ]
    },
    {
      question: "Your childhood here was:",
      answerOptions: [
        {answer: "Harry Potter"},
        {answer: "Luke Skywalker"},
        {answer: "Iron man"},
        {answer: "Elle Woods"}
      ]
    },
    {
      question: "What's your favourite Britney song?",
      answerOptions: [
        {answer: "Oops I did it again!"},
        {answer: "Toxic"},
        {answer: "Gimme More"},
        {answer: "I love Rock'n'Roll"}
      ]
    },
    {
      question: "Which cat do you want?",
      answerOptions: [
        {answer: "Anca"},
        {answer: "Francesco"},
        {answer: "Pamela"},
        {answer: "Anelisy"}
      ]
    }, 
    {
      question: "Which cat do you want?",
      answerOptions: [
        {answer: "Anca"},
        {answer: "Francesco"},
        {answer: "Pamela"},
        {answer: "Anelisy"}
      ]
    }, 
  ];

  


  return (
    <div>
          { done === 100 ? (
                  <div className='quiz-result'>
                     
                        <img className="movie-poster" src={`http://img.omdbapi.com/?i=${showMovie.imdbID}&h=600&apikey=4d9435f5`}/>
                        <h1>{showMovie.Title}</h1>
                        <p> <span>Staring: </span> {showMovie.Actors}</p>
                        <button className="movie-btn" onClick={getMovie}>Get Result</button>
                  </div>
          ) : (
            <>
          <div className="quiz-container" style={{
            display: done === 100 ? "none" : "flex"}}>
              <div className="quiz-question">
                <h2>{content[movieQuestion].question}</h2>
              </div>
              <div className="quiz-container">
						      {content[movieQuestion].answerOptions.map((answerOption, index) => (
							    <button key={index} className="quiz-answer" onClick={() => handleAddDone(answerOption.value)}>{answerOption.answer}</button>))}
					    </div>
          </div>
          <>
            <ProgressBar
            done={done}
            handleAddDone={handleAddDone}
            handleCutDone={handleCutDone}/>
          </>
          </>
          )} 
    </div>
  );
}

export default Movie;
