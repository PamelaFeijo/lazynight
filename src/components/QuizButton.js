import "./QuizButton.css";
import { Link } from "react-router-dom";

const QuizButton = () => {
  return (
    <div>
      <div>
        <button className="quiz-button">
          <Link to="/food-quiz">
            {" "}
            I DON'T KNOW <br></br>WHAT TO EAT{" "}
          </Link>
        </button>
      </div>
      <div>
        <button className="quiz-button">
          I DON'T KNOW <br></br>WHAT TO WATCH
        </button>
      </div>
    </div>
  );
};
export default QuizButton;
