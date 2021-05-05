import "./Result.css";
import { Link } from "react-router-dom";

function Result(props) {
  const { showFood, showMovie, showFoodResult, showMovieResult } = props;
  console.log(showFood);
  return (
    <div className="result-container">
      {showFoodResult ? (
        <div className="suggestion">
          <h1>{showFood.strMeal}</h1>
          <img className="img-suggestion" src={showFood.strMealThumb} alt="" />
          <button className="more">Food info</button>
        </div>
      ) : (
        <div className="suggestion">
          <Link to="/food">
            <button>Get a food a suggestion</button>
          </Link>
        </div>
      )}
      {showMovieResult ? (
        <div className="suggestion">
          <h1>{showMovie.Title}</h1>
          <img className="img-suggestion" src={showMovie.Poster} />
          <button className="more">More info</button>
        </div>
      ) : (
        <div className="suggestion">
          <Link to="/movie">
            <button>Get a movie a suggestion</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Result;
