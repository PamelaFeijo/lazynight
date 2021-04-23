
import ProgressBar from "./ProgressBar";
import { useState } from "react";

function Food(props) {
  const [done, setDone] = useState(0);

  function handleAddDone() {
    setDone(done + 20);
  }

  function handleCutDone() {
    setDone(done - 20);
  }
  const { showFood, getFood } = props;
  return (
    <div>
      <button className="food-btn" onClick={getFood}>
        Get Food
      </button>
      <div>
        <img className="small-image" src={showFood.strMealThumb} alt="" />
      </div>
      <>
    <ProgressBar
          done={done}
          handleAddDone={handleAddDone}
          handleCutDone={handleCutDone}
        />
    </>
    </div>
  );
}
export default Food;

