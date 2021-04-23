import Navbar from "./Navbar";
import Banner from "./Banner";
import Title from "./Title";
import QuizButton from "./QuizButton";
import { useLocation } from "react-router-dom";


const Header = () => {
   
    const location = useLocation();
   
   /*  useEffect(() => {
        console.log(location)
        if (location.pathname === "/"){
            console.log("Home")}
    }, []) */
    

  return (
    <div>
      {/* <h1>{location.pathname.replace("/", "Hey there! Don't know what to do")}</h1> */}
     {/*  <span>Path is: {location.pathname}</span> */}
      <Navbar />
      <Banner location={location.pathname}/>
      <Title />
      <QuizButton />
    </div>
  );
};

export default Header;


