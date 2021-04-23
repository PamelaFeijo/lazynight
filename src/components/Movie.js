function Movie(props) {
  const { showMovie, getMovie } = props;
  return (
    
    <div>
      <button className="movie-btn" onClick={getMovie}>
        Get Movie
      </button>
      <div>
        <img className="small-image" src={showMovie.Poster} alt="" />
      </div>
    </div>
  );
}
export default Movie;
