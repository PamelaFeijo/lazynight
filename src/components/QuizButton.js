import "./QuizButton.css";
import { NavLink } from "react-router-dom";
import Bounce from "react-reveal";

const QuizButton = () => {
  return (
    <div className="buttons">
      <Bounce top cascade>
        <div>
          <button className="quiz-button">
            <NavLink className="bttnTEXT" to="/food">
              {" "}
              I don't know <br></br> what to eat <br></br>🍔 🍕 🍝 🍣 🥗
              <br></br>
            </NavLink>
          </button>
        </div>
        <div>
          <button className="quiz-button">
            <NavLink className="bttnTEXT" to="/movie">
              {" "}
              I don't know <br></br> what to watch<br></br>🚢 💘 💣 🤡 👻
            </NavLink>
          </button>
        </div>
      </Bounce>
    </div>
  );
};
export default QuizButton;
