import { Link } from "react-router-dom"

const InfoMovie = ({ showMovie, showMovieResult}) => {    
    return(
        <div>            
            <div className="result-container">  
               <h1>{showMovie.Title}</h1>                          
               <img className="img-suggestion" src={showMovie.Poster} alt={showMovie.Title} />
               <p>Year:</p>
               <p>{showMovie.Year}</p> 
               <p>Genre:</p>
               <p>{showMovie.Genre}</p>
               <p>Actors:</p>
               <p>{showMovie.Actors}</p>                               
               <p>Plot:</p> 
               <p>{showMovie.Plot}</p>  
               <div>
                  <Link to="/result">
                    <button className="quiz-btn"> Back to Results </button>
                  </Link>  
               </div>
           </div> 
        </div>
    )
}

export default InfoMovie;