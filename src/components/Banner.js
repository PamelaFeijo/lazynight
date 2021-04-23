import "./Banner.css";
import { useEffect} from "react";

const Banner = (props) => {
 // const [inIndex, setInIndex] = useState();

  useEffect(() => {
   
    if (props === "/") {
        console.log("home")
    }else if (props === "/about"){
        console.log("about")
    }

  }, []); 
 
  console.log(props)
  return (
    <div className="banner">
                
      <h2>
        Hey there! Don't know what to do
        <span className="banner-span"> tonight</span>?
      </h2>
    </div>
  );
};
export default Banner;
