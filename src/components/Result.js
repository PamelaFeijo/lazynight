import "./Result.css";
import { Link } from "react-router-dom";

function Result(props) {
  const { showFood, showMovie, showFoodResult, showMovieResult } = props;

  return (
    <div>
      {showFoodResult ? (
        <div className="result-container">
          <div className="suggestion">
            <div className="background">
              <h2 className="card-title">Your Lazynight meal</h2>
            </div>
            <div className="title-wrap">
              <h1 className="card-subtitle">{showFood.strMeal}</h1>
            </div>
            <img
              className="img-suggestion"
              src={showFood.strMealThumb}
              alt=""
            />
            <button className="more">Ingredients & Recipe</button>
          </div>
          {showMovieResult ? (
            <div className="suggestion">
              <div className="background">
                <h2 className="card-title">Your Lazynight movie</h2>
              </div>
              <div className="title-wrap">
                <h1 className="card-subtitle">{showMovie.Title}</h1>
              </div>
              <img className="img-suggestion" src={showMovie.Poster} />
              <button className="more">More info</button>
            </div>
          ) : (
            <div className="suggestion">
              <Link to="/movie">
                <button className="more">Get also a movie suggestion</button>
              </Link>
            </div>
          )}
        </div>
      ) : (
        <div>
          {showMovieResult ? (
            <div className="result-container">
              <div className="suggestion">
                <div className="title-wrap">
                  <h1>{showMovie.Title}</h1>
                </div>
                <img className="img-suggestion" src={showMovie.Poster} />
                <button className="more">Movie details</button>
              </div>
            </div>
          ) : (
            <div className="result-container">
              <div className="not-yet">
                No suggestion yet? Take one of our quiz!
              </div>

              <div className="suggestion">
                <Link to="/food">
                  <button className="more">Get a food suggestion</button>
                </Link>
              </div>
              <div className="suggestion">
                <Link to="/food">
                  <button className="more">Get a movie suggestion</button>
                </Link>
              </div>
            </div>
          )}
        </div>
      )}

      <div className="another-container">
        <Link to="/food">
          <button className="another">Get another meal</button>
        </Link>
        <Link to="/movie">
          <button className="another">Get another movie</button>
        </Link>
      </div>
    </div>
  );
}

export default Result;
