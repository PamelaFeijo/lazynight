import { Link } from "react-router-dom";
import "./Info.css";

const InfoFood = ({ showFood }) => {
  return (
    <div>
      <div className="info-result-container">
        <div className="info-suggestion">
          <div className="info-background">
            <h2 className="card-title">{showFood.strMeal}</h2>
          </div>
          <div className="info-img">
            <img
              className="img-suggestion"
              src={showFood.strMealThumb}
              alt=""
            />{" "}
          </div>
          <div className="info-container">
            <div className="info-title">
              <p className="card-p">Ingredients</p>
            </div>
            <ul>
              <li>{showFood.strIngredient1}</li>
              <li>{showFood.strIngredient2}</li>
              <li>{showFood.strIngredient3}</li>
              <li>{showFood.strIngredient4}</li>
              <li>{showFood.strIngredient5}</li>
            </ul>

            <div className="info-title">
              <p className="card-p">Recipe</p>
            </div>
            <div className="recipe">
              <p className="result-description">{showFood.strInstructions}</p>
            </div>
          </div>
          <div>
            <Link to="/result">
              <button className="another"> Back to Results </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoFood;
