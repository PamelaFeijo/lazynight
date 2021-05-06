import Navbar from "./Navbar";
import Banner from "./Banner";

import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <div>
      <Navbar />
      <Banner location={location.pathname} />
    </div>
  );
};

export default Header;
