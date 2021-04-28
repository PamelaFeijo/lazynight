import ProgressBar from "./ProgressBar";
import { useState } from "react";

const content = [
  {
    question: "Would you like a cat?",
    answerOne: "Yes",
    answerTwo: "No",
    answerThree: "Maybe",
    answerFour: "Don't think so",
  },
  {
    question: "Which name would you give to him?",
    answerOne: "Romeo",
    answerTwo: "Carmine",
    answerThree: "Angela",
    answerFour: "Milou",
  },
  {
    question: "What is your favorite cat color?",
    answerOne: "White",
    answerTwo: "Black",
    answerThree: "Red",
    answerFour: "Multicolor",
  },
  {
    question: "What should this cat do?",
    answerOne: "Nothing",
    answerTwo: "Eat, pray, love",
    answerThree: "React Node.js",
    answerFour: "Sing like Albano",
  },
  {
    question: "Which cat do you want?",
    answerOne: "Anca",
    answerTwo: "Francesco",
    answerThree: "Pamela",
    answerFour: "Anelisy",
  },
  {},
];

function Quiz() {
  const [done, setDone] = useState(0);
  const [movieQuestion, setMovieQuestion] = useState(0);

  function handleAddDone() {
    if (movieQuestion < 5) {
      setMovieQuestion(movieQuestion + 1);
      setDone(done + 20);
    }
  }

  function handleCutDone() {
    if (movieQuestion > 0) {
      setMovieQuestion(movieQuestion - 1);
      setDone(done - 20);
    }
  }
  return (
    <div
      class="quiz-container"
      style={{
        display: done === 100 ? "none" : "flex",
      }}
    >
      <div class="quiz-question">
        <h2>{content[movieQuestion].question}</h2>
      </div>
      <button class="quiz-answer" onClick={handleAddDone}>
        {content[movieQuestion].answerOne}
      </button>
      <button class="quiz-answer" onClick={handleAddDone}>
        {content[movieQuestion].answerTwo}
      </button>
      <button class="quiz-answer" onClick={handleAddDone}>
        {content[movieQuestion].answerThree}
      </button>
      <button class="quiz-answer" onClick={handleAddDone}>
        {content[movieQuestion].answerFour}
      </button>
      <ProgressBar
        done={done}
        handleAddDone={handleAddDone}
        handleCutDone={handleCutDone}
      />
    </div>
  );
}

export default Quiz;
