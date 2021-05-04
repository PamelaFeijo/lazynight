import "./Result.css";

function Result(showMovie) {
  console.log(showMovie);
  return (
    <div className="result-container">
      <div className="suggestion">
        <h1>{showMovie.showMovie.Title}</h1>
        <img
          className="img-suggestion"
          src={showMovie.showMovie.Poster}
          alt=""
        />
        <button className="more">Movie info</button>
      </div>
      <div className="suggestion">
        <h1>{showMovie.title}</h1>
        <img className="img-suggestion" />
        <button className="btn-suggestion">More info</button>
      </div>
    </div>
  );
}

export default Result;
