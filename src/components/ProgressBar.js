function ProgressBar({ done, handleAddDone, handleCutDone }) {
  return (
    <div class="container">
      <div class="progress-container">
        <div class="progress-bar">
          <div
            class="progress-done"
            style={{
              display: done === 100 ? "none" : "flex",
              opacity: 1,
              width: `${done}%`,
            }}
          >
            {done < 100 ? `${done}%` : "You got it!"}
          </div>
          <div
            class="quiz-done"
            style={{
              display: done !== 100 ? "none" : "flex",
            }}
          >
            Click here to discover your cat!
          </div>
        </div>
      </div>
      <button class="back-btn" onClick={handleCutDone}>
        Back to previous question
      </button>
    </div>
  );
}

export default ProgressBar;
