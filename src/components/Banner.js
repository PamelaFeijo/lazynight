import "./Banner.css";

const Banner = (props) => {
  const getBannerMessage = () => {
    if (props.location === "/") {
      return "Hey there! Don't know what to do tonight?";
    } else if (props.location === "/about") {
      return "The Team";
    } else if (props.location === "/movie") {
      return "Movie Quiz";
    } else if (props.location === "/food") {
      return "Food Quiz";
    } else if (props.location === "/contact") {
      return "Contact us";
    } else if (props.location === "/result") {
      return "Your LazyNight Tips!";
    }
  };

  return (
    <div className="banner">
      <h2>{getBannerMessage()}</h2>
    </div>
  );
};
export default Banner;
