import Navbar from "./Navbar";
import Banner from "./Banner";
import Title from "./Title";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <div>
      <Navbar />
      <Banner location={location.pathname} />
      <Title location={location.pathname} />
    </div>
  );
};

export default Header;
