const content = [
  {
    question: "Do you want a cat?",
    answerOne: "Yes",
    answerTwo: "No",
    answerThree: "Maybe",
    answerFour: "Don't think so",
  },
  {
    question: "Which letter do you prefer?",
    answerOne: "A",
    answerTwo: "B",
    answerThree: "C",
    answerFour: "D",
  },
  {
    question: "Which number is higher?",
    answerOne: "1",
    answerTwo: "2",
    answerThree: "3",
    answerFour: "4",
  },
  {
    question: "Are you happy?",
    answerOne: "Yes",
    answerTwo: "No",
    answerThree: "Maybe",
    answerFour: "Don't think so",
  },
  {
    question: "Which cat do you want?",
    answerOne: "Anca",
    answerTwo: "Francesco",
    answerThree: "Pamela",
    answerFour: "Anelisy",
  },
  {
    question: "Which cat do you want?",
    answerOne: "Anca",
    answerTwo: "Francesco",
    answerThree: "Pamela",
    answerFour: "Anelisy",
  },
  {
    question: "Which cat do you want?",
    answerOne: "Anca",
    answerTwo: "Francesco",
    answerThree: "Pamela",
    answerFour: "Anelisy",
  },
];

function Quiz({ done, movieQuestion, handleAddDone }) {
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
    </div>
  );
}

export default Quiz;
