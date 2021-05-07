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
            <div className="another-container">
              <Link to="/infoFood">
                {" "}
                <button className="another">Ingredients & Recipe</button>
              </Link>
              <Link to="/food">
                <button className="another">Get another meal</button>
              </Link>
            </div>
          </div>
          {showMovieResult ? (
            <div className="suggestion">
              <div className="background">
                <h2 className="card-title">Your Lazynight movie</h2>
              </div>
              <div className="title-wrap">
                <h1 className="card-subtitle">{showMovie.Title}</h1>
              </div>
              <img
                className="img-suggestion"
                src={showMovie.Poster}
                alt="poster"
              />
              <div className="another-container">
                <Link to="/infoMovie">
                  <button className="another">Movie details</button>
                </Link>
                <Link to="/movie">
                  <button className="another">Get another movie</button>
                </Link>
              </div>
            </div>
          ) : (
            <div className="suggestion">
              <Link to="/movie">
                <button className="another">Get also a movie suggestion</button>
              </Link>
            </div>
          )}
        </div>
      ) : (
        <div>
          {showMovieResult ? (
            <div className="result-container">
              <div className="suggestion">
                <div className="background">
                  <h2 className="card-title">Your Lazynight movie</h2>
                </div>
                <div className="title-wrap">
                  <h1 className="card-subtitle">{showMovie.Title}</h1>
                </div>
                <img
                  className="img-suggestion"
                  src={showMovie.Poster}
                  alt="poster"
                />
                <div className="another-container">
                  <Link to="/infoMovie">
                    <button className="another">Movie details</button>
                  </Link>
                  <Link to="/movie">
                    <button className="another">Get another movie</button>
                  </Link>
                </div>
              </div>
              <div className="suggestion">
                <Link to="/food">
                  <button className="another">
                    Get also a meal suggestion
                  </button>
                </Link>
              </div>
            </div>
          ) : (
            <div className="result-container">
              <div className="not-yet">
                No suggestions yet? Take one of our quizzes!
              </div>

              <div className="suggestion">
                <Link to="/food">
                  <button className="another">Get a food tip</button>
                </Link>
              </div>
              <div className="suggestion">
                <Link to="/food">
                  <button className="another">Get a movie tip</button>
                </Link>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Result;
