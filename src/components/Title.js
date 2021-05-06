import "./Title.css";

const Title = (props) => {
  const getTitleMessage = () => {
    if (props.location === "/") {
      return "How can we help?";
    } else if (props.location === "/food") {
      return "Your LazyNight Food";
    }
  };

  return (
    <div className="title">
      <h3>{getTitleMessage()}</h3>
    </div>
  );
};

export default Title;
