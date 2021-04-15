import { useEffect, useState } from "react";

function Movie() {
  const [showMovie, setShowMovie] = useState("");

  function getMovie() {
    fetch("https:/www.omdbapi.com/?i=tt3896198&apikey=be19834b")
      .then((res) => res.json())
      .then((data) => setShowMovie(data));
  }

  useEffect(getMovie, []);

  return (
    <div>
      <img src={showMovie.Poster} alt="poster" />
    </div>
  );
}
export default Movie;
