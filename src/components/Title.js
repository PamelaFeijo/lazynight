import "./Title.css";

const Title = (props) => {
    const getTitleMessage = () => {
        if (props.location === "/") {
          return "How can we help?";
        } else if (props.location === "/about") {
          return "About Us";
        } else if (props.location === "/movie") {
          return "Your LazyNight Movie";
        } else if (props.location === "/food") {
          return "Your LazyNight Movie";
        }
      };
    
      console.log(props);
      return (
        <div className="title">
          <h3>{getTitleMessage()}</h3>
        </div>
      );
    };
 
 
 export default Title;