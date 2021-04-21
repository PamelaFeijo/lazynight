const content = [
  {
    question: "Ciao ciao ciao?",
    answerOne: "Yes",
    answerTwo: "No",
    answerThree: "Maybe",
    answerFour: "Don't think so",
  },
];

function Quiz() {
  return (
    <div class="quiz-container">
      <div class="quiz-question">
        <h2>What is your favorite cat?</h2>
      </div>
      <div class="quiz-answer">Anca</div>
      <div class="quiz-answer">Pamela</div>
      <div class="quiz-answer">Francesco</div>
      <div class="quiz-answer">Anelisy</div>
    </div>
  );
}

export default Quiz;
