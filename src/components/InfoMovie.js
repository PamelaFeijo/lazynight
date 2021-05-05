import { Link } from "react-router-dom"

const InfoMovie = ({ showMovie }) => {    
    return(
        <div>            
            <div className="result-container">  
               <h1>{showMovie.Title}</h1>                          
               <img className="img-suggestion" src={showMovie.Poster} alt={showMovie.Title} />
               <h3>Year:</h3>
               <p>{showMovie.Year}</p> 
               <h3>Genre:</h3>
               <p>{showMovie.Genre}</p>
               <h3>Actors:</h3>
               <p>{showMovie.Actors}</p>                               
               <h3>Plot:</h3> 
               <p className="result-description">{showMovie.Plot}</p>  
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