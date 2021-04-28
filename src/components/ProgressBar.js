function ProgressBar({ done, handleAddDone, handleCutDone }) {
  return (
    <div class="container">
      <button class="next-btn" onClick={handleCutDone}>
        Back
      </button>
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
            Click here to discover the perfect cat for you!
          </div>
        </div>
      </div>
      <button
        class="back-btn"
        onClick={handleAddDone}
        style={{
          display: done === 100 ? "none" : "flex",
        }}
      >
        Next
      </button>
    </div>
  );
}

export default ProgressBar;
