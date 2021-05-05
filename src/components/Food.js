import { useState } from "react";
import Bounce from "react-reveal/Bounce";
import "./Food.css";
import ProgressBar from "./ProgressBar";
import { Link } from "react-router-dom";

function Food(props) {
  const {    
    getFood,
    setType,
    type,
    setIngredient,    
  } = props;
  const [done, setDone] = useState(0);
  const [foodQuestion, setFoodQuestion] = useState(0);

  function handleAddDone(value) {
    if (value === 0) {
      setType("chicken");
    } else if (value === 1) {
      setType("beef");
    } else if (value === 2) {
      setType("vegetarian");
    } else if (type === "chicken") {
      if (value === 4) {
        setIngredient("mediterranean");
      } else if (value === 5) {
        setIngredient("american");
      } else if (value === 6) {
        setIngredient("asian");
      }
    } else if (type === "beef") {
      if (value === 4) {
        setIngredient("mediterranean");
      } else if (value === 5) {
        setIngredient("american");
      } else if (value === 6) {
        setIngredient("asian");
      }
    } else if (type === "vegetarian") {
      if (value === 4) {
        setIngredient("mediterranean");
      } else if (value === 5) {
        setIngredient("american");
      } else if (value === 6) {
        setIngredient("asian");
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
        { answer: "Chicken", value: 0 },
        { answer: "Beef", value: 1 },
        { answer: "Vegetarian", value: 2 },
        { answer: "Surprise me!", value: 3 },
      ],
    },
    {
      question: "From which area do you prefer the food the most?",
      answerOptions: [
        { answer: "Mediterranean", value: 4 },
        { answer: "American", value: 5 },
        { answer: "Asian", value: 6 },
        { answer: "Anywhere", value: 6 },
      ],
    },
    {
      question: "With whom would you like to have dinner?",
      answerOptions: [
        { answer: "Barack Obama" },
        { answer: "Will Smith" },
        { answer: "Billie Eilish" },
        { answer: "With myself" },
      ],
    },
    {
      question: "How good are your cooking skills?",
      answerOptions: [
        { answer: "Masterchef" },
        { answer: "I am able to eat what I cook" },
        { answer: "I can make noodles" },
        { answer: "I have no idea what I am doing" },
      ],
    },
    {
      question: "Where are you eating tonight?",
      answerOptions: [
        { answer: "At the dinner table" },
        { answer: "In the garden" },
        { answer: "From my bed" },
        { answer: "From the couch" },
      ],
    },
  ];

  return (
    <div>
      {done === 100 ? (
        <div className="quiz-result">
          {/* {showFoodResult ? (
            <div>
              <Result showFood={showFood} showFoodResult={showFoodResult} />
            </div>
          ) : (
            <> </>
          )} */}

          <Link to="/result">
            <button className="quiz-btn" onClick={getFood}>
              Get Result
            </button>
          </Link>
        </div>
      ) : (
        <>
          <div
            className="quiz-container"
            style={{
              display: done === 100 ? "none" : "flex",
            }}
          >
            <Bounce cascade>
              <button className="quiz-question">
                <h2 className="question">{content[foodQuestion].question}</h2>
              </button>
              <div className="quiz-container-answers">
                {content[foodQuestion].answerOptions.map(
                  (answerOption, index) => (
                    <button
                      key={index}
                      className="quiz-answer"
                      onClick={() => handleAddDone(answerOption.value)}
                    >
                      {answerOption.answer}
                    </button>
                  )
                )}
              </div>
            </Bounce>
          </div>
          <>
            <ProgressBar
              done={done}
              handleAddDone={handleAddDone}
              handleCutDone={handleCutDone}
            />
          </>
        </>
      )}
    </div>
  );
}

export default Food;
