import { Link } from "react-router-dom";

const InfoFood = ({showFood, showFoodResult}) => {    
    return(
        <div>
            <div className="result-container">              
                <h1>{showFood.strMeal}</h1> 
                <img className="img-suggestion" src={showFood.strMealThumb} alt="" />
                <p>Ingredients</p>
                <p>{showFood.strIngredient1}</p>
                <p>{showFood.strIngredient2}</p>
                <p>{showFood.strIngredient3}</p>
                <p>{showFood.strIngredient4}</p>
                <p>{showFood.strIngredient5}</p>
                <p>Recipe</p>
                <p>{showFood.strInstructions}</p>  
                <div>
                  <Link to="/result">
                    <button className="quiz-btn"> Back to Results </button>
                  </Link>  
               </div>         
            </div>
         {/*  {showFoodResult ? (
            <div className="result-container">
              <div className="suggestion">
                <p>{showFood.strMeal}</p> 
                <img className="img-suggestion" src={showFood.strMealThumb} alt="" />
                <p>Ingredients</p>
                <p>{showFood.strIngredient1}</p>
                <p>{showFood.strIngredient2}</p>
                <p>{showFood.strIngredient3}</p>
                <p>{showFood.strIngredient4}</p>
                <p>{showFood.strIngredient5}</p>
                <p>Recipe</p>
                <p>{showFood.strInstructions}</p>                
              </div>
            </div>
          ) : (  
            <div className="result-container">  
               <h1>{showMovie.Title}</h1>                          
               <img className="img-suggestion" src={showMovie.Poster} alt="" />
               <p>Actors: {showMovie.Actors}</p>
               <p>Year: {showMovie.Year}</p> 
               <p>Genre: {showMovie.Genre}</p>  
               <p>Plot: {showMovie.Plot}</p>  
           </div> )} */}
        </div>
    )
}

export default InfoFood;