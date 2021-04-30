import "./QuizButton.css";
import { NavLink } from "react-router-dom";

const QuizButton = () => {
  return (
    <div>
      <div>
        <button className="quiz-button">
          <NavLink className="bttnTEXT" to="/food-quiz">
            {" "}
            I don't know <br></br> what to eat{" "}
          </NavLink>
        </button>
      </div>
      <div>
        <button className="quiz-button">
          <NavLink className="bttnTEXT" to="/movie">
          {" "}
            I don't know <br></br> what to watch{" "}
          </NavLink>
        </button>
      </div>
    </div>
  );
};
export default QuizButton;
