import Navbar from "./Navbar";
import Banner from "./Banner";
import Title from "./Title";
import QuizButton from "./QuizButton";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <div>
      <Navbar />
      <Banner location={location.pathname} />
      <Title location={location.pathname} />
      <QuizButton />
    </div>
  );
};

export default Header;
