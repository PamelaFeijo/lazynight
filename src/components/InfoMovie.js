import { Link } from "react-router-dom";
import "./Info.css";

const InfoMovie = ({ showMovie }) => {
  return (
    <div>
      <div className="info-result-container">
        <div className="info-suggestion">
          <div className="info-background">
            <h2 className="card-title">{showMovie.Title}</h2>
          </div>
          <div className="info-img">
            <img
              className="img-suggestion"
              src={showMovie.Poster}
              alt={showMovie.Title}
            />
          </div>
          <div className="info-container">
            <div className="info-title">
              <p className="card-p">Year</p>
            </div>

            <p>{showMovie.Year}</p>
            <div className="info-title">
              <p className="card-p">Genre</p>
            </div>

            <p>{showMovie.Genre}</p>
            <div className="info-title">
              <p className="card-p">Actors</p>
            </div>
            <p className="result-description">{showMovie.Actors}</p>
            <div className="info-title">
              <p className="card-p">Plot</p>
            </div>
            <p className="result-description">{showMovie.Plot}</p>
            <div>
              <Link to="/result">
                <button className="another"> Back to Results </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoMovie;
