function ProgressBar({ done, handleAddDone, handleCutDone }) {
  return (
    <div class="container">
      <div class="progress-container">
        <button class="back-btn" onClick={handleCutDone}>
          Back
        </button>
        <div class="progress-bar">
          <div
            class="progress-done"
            style={{
              opacity: 1,
              width: `${done}%`,
            }}
          >
            {done < 100 ? `${done}%` : "You got it!"}
          </div>
        </div>
        <button class="next-btn" onClick={handleAddDone}>
          Next
        </button>
      </div>
    </div>
  );
}

export default ProgressBar;
