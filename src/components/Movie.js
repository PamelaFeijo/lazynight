import React, { useState } from 'react';
import ProgressBar from "./ProgressBar";
import "./Movie.css"

function Movie(props) {
  const { showMovie, getMovie , setGenre , genre, setDecade , showMovieResult } = props;
  const [movieQuestion, setMovieQuestion] = useState(0);
  const [done, setDone] = useState(0);


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
    else if(genre === "comedy"){
      if(value === 4){
        setDecade("90s")
      }
      else if(value === 5){
        setDecade("2000s")
      } 
      else if(value === 6){
        setDecade("2010s")
      } 
    }
    else if(genre === "action"){
      if(value === 4){
        setDecade("90s")
      }
      else if(value === 5){
        setDecade("2000s")
      } 
      else if(value === 6){
      setDecade("2010s")
      } 
    }
    else if(genre === "rom"){
      if(value === 4){
        setDecade("90s")
      }
      else if(value === 5){
        setDecade("2000s")
      } 
      else if(value === 6){
      setDecade("2010s")
      } 
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
        {answer: "I miss the 90s" , value : 4 },
        {answer: "2005 was only 5 years ago" , value : 5},
        {answer: "I should make a Tik Tok right now" , value : 6},
        {answer: "I feel nothing." , value : 6}
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
                    { showMovieResult ? (<div className="movie-result">
                <img className="movie-poster" src={`http://img.omdbapi.com/?i=${showMovie.imdbID}&h=600&apikey=4d9435f5`} alt="poster"/>
                <div className="result-details">
                    <h1 className="result-title">{showMovie.Title}</h1>
                    <p className="result-year"> <span>Year: </span> {showMovie.Year}</p>
                    <p className="result-duration"> <span>Duration: </span> {showMovie.Runtime}</p>
                    <p className="result-rating"> <span>Rating: {" "}</span> {showMovie.Ratings[0].Value}</p>
                    <p className="result-actors"> <span>Staring: </span> {showMovie.Actors}</p>
                    <p className="result-director"><span>Directed by:</span> {showMovie.Director}</p>
                    <p className="result-plot">{showMovie.Plot}</p>
                </div>
                     </div>) : (<> </>)}
                     
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
