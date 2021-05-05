import "./QuizButton.css";
import { NavLink } from "react-router-dom";
import Bounce from "react-reveal";

const QuizButton = () => {
  return (
    <div className="buttons">
      <Bounce top cascade>
        <div>
            <NavLink className="bttnTEXT" to="/food">
            <button className="quiz-button">
              {" "}
              I don't know <br></br> what to eat <br></br>🍔 🍕 🍝 🍣 🥗
              <br></br>
              </button>
            </NavLink>
        </div>
        <div>
            <NavLink className="bttnTEXT" to="/movie">
            <button className="quiz-button">
              {" "}
              I don't know <br></br> what to watch<br></br>🚢 💘 💣 🤡 👻
              </button>
            </NavLink>
        </div>
      </Bounce>
    </div>
  );
};
export default QuizButton;
