import { Link } from "react-router-dom";

const InfoFood = ({ showFood }) => {    
    return(
        <div>
            <div className="result-container">              
                <h1>{showFood.strMeal}</h1> 
                <img className="img-suggestion" src={showFood.strMealThumb} alt="" />
                <h3>Ingredients:</h3>
                <p>{showFood.strIngredient1}</p>
                <p>{showFood.strIngredient2}</p>
                <p>{showFood.strIngredient3}</p>
                <p>{showFood.strIngredient4}</p>
                <p>{showFood.strIngredient5}</p>
                <h3>Recipe:</h3>
                <p className="result-description">{showFood.strInstructions}</p>  
                <div>
                  <Link to="/result">
                    <button className="quiz-btn"> Back to Results </button>
                  </Link>  
               </div>         
            </div>        
        </div>
    )
}

export default InfoFood;