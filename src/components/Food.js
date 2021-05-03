import ProgressBar from "./ProgressBar";
import { useState } from "react";
import "./Food.css"


function Food(props) {
  const { showFood, getFood , setType , type, setIngredient, showFoodResult } = props;
  const [done, setDone] = useState(0);
  const [foodQuestion, setFoodQuestion] = useState(0);
  
  function handleAddDone(value) {
   
      if(value === 0){
        setType("chicken")
      }
      else if(value === 1){
        setType("beef")
      }
      else if (value === 2) {
        setType("vegetarian")
      }
      else if(type === "chicken"){
        if(value === 4){
          setIngredient("mediterranean")
        }
        else if(value === 5){
          setIngredient("american")
        } 
        else if(value === 6){
          setIngredient("asian")
        } 
      }
      else if(type === "beef"){
        if(value === 4){
          setIngredient("mediterranean")
        }
        else if(value === 5){
          setIngredient("american")
        } 
        else if(value === 6){
          setIngredient("asian")
        } 
      }
      else if(type === "vegetarian"){
        if(value === 4){
          setIngredient("mediterranean")
        }
        else if(value === 5){
          setIngredient("american")
        } 
        else if(value === 6){
          setIngredient("asian")
        } 
      }      

    if (foodQuestion < 5) {
      setFoodQuestion(foodQuestion + 1);
      setDone(done + 20);
    }
  }

  function handleCutDone() {
    if (foodQuestion > 1) {
      setFoodQuestion(foodQuestion - 1);
      setDone(done - 20);
    }
  }

  const content = [
    {
      question: "What do you feel like eating tonight?",
      answerOptions: [
        {answer: "Chicken", value : 0},
        {answer: "Beef", value: 1},
        {answer: "Vegetarian", value: 2},
        {answer: "Surprise me!", value: 3}
      ]
    },
    {
      question: "From which area do you prefer the food the most?",
      answerOptions: [
        {answer: "Mediterranean" , value : 4 },
        {answer: "American" , value : 5},
        {answer: "Asian" , value : 6},
        {answer: "Anywhere" , value : 6}
      ]
    },
    {
      question: "With whom would you like to have dinner?",
      answerOptions: [
        {answer: "Barack Obama"},
        {answer: "Will Smith"},
        {answer: "Billie Eilish"},
        {answer: "With myself"}
      ]
    },
    {
      question: "How good are your cooking skills?",
      answerOptions: [
        {answer: "Masterchef"},
        {answer: "I am able to eat what I cook"},
        {answer: "I can make noodles"},
        {answer: "I have no idea what I am doing"}
      ]
    },
    {
      question: "Where are you eating tonight?",
      answerOptions: [
        {answer: "At the dinner table"},
        {answer: "In the garden"},
        {answer: "From my bed"},
        {answer: "From the couch"}
      ]
    },    
  ];


  return (
    <div>
          { done === 100 ? (
                  <div className='quiz-result'>
                    { showFoodResult ? (<div className="movie-result">             
                <div className="result-container">
                    <p className="result-title">{showFood.strMeal}</p>
                     <img className="result-image" src={showFood.strMealThumb} alt={showFood.strMeal} />
                     <p className="result-recipeTitle">Ingredients</p>
                     <ol className="result-ingredient">
                      <li>{showFood.strIngredient1}</li>
                      <li>{showFood.strIngredient2}</li>
                      <li>{showFood.strIngredient3}</li>
                      <li>{showFood.strIngredient4}</li>
                      <li>{showFood.strIngredient5}</li>
                      <li>{showFood.strIngredient6}</li>
                      <li>{showFood.strIngredient7}</li>
                      <li>{showFood.strIngredient8}</li>
                      <li>{showFood.strIngredient9}</li>
                      <li>{showFood.strIngredient10}</li>
                     </ol>
                     <p className="result-recipeTitle">Recipe</p>
                     <p className="result-recipe">{showFood.strInstructions}</p>                                                    
                </div>
                     </div>) : (<> </>)}
                     
                        <button className="quiz-btn" onClick={getFood}>Get Result</button>
                  </div>
          ) : (
            <>
          <div className="quiz-container" style={{
            display: done === 100 ? "none" : "flex"}}>
              <div className="quiz-question">
                <h2>{content[foodQuestion].question}</h2>
              </div>
              <div className="quiz-container">
						      {content[foodQuestion].answerOptions.map((answerOption, index) => (
							    <button key={index} className="quiz-answer" onClick={() => handleAddDone(answerOption.value)}>{answerOption.answer}</button>))}
					    </div>
          </div>
          <>
            <ProgressBar
            done={done}
            handleAddDone={handleAddDone}
            handleCutDone={handleCutDone}/>
          </>
          </>
          )} 
    </div>    
  );
}

export default Food;
