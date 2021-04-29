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
