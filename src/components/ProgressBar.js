
function ProgressBar({ done, handleAddDone, handleCutDone }) {
  return (
    <div className="container">
      <div className="progress-container">
        <button className="back-btn" onClick={handleCutDone}>
          Back
        </button>
        <div className="progress-bar">
          <div
            className="progress-done"
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
