import React, { useState } from 'react';
import ProgressBar from "./ProgressBar";


function Movie(props) {
  const [done, setDone] = useState(0);

  function handleAddDone() {
    setDone(done + 20);
  }

  function handleCutDone() {
    setDone(done - 20);
  }

  const { showMovie, getMovie } = props;
  return (
    
    <div>
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
