function Food(props) {
  const { showFood, getFood } = props;
  return (
    <div>
      <button className="food-btn" onClick={getFood}>
        Get Food
      </button>
      <div>
        <img className="small-image" src={showFood.strMealThumb} alt="" />
      </div>
    </div>
  );
}
export default Food;
