import { useState } from "react";
import { ReactComponent as CloseMenu } from "../assets/menu-close.svg";
import { ReactComponent as MenuIcon } from "../assets/menu-open.svg";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div className="header">
      <div className="logo-nav">
        <div className="logo-container">
          <p className="logo">LAZYNIGHT</p>
        </div>
        <ul className={click ? "nav-options active" : "nav-options"}>
          <li className="option" onClick={closeMobileMenu}>
            <Link to="/food">FOOD QUIZ</Link>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <Link to="/movie">MOVIE QUIZ</Link>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <Link to="/about">ABOUT</Link>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <Link to="/contact">CONTACT</Link>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <Link to="/" className="home">
              HOME
            </Link>
          </li>
        </ul>
      </div>
      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <CloseMenu className="menu-icon" />
        ) : (
          <MenuIcon className="menu-icon" />
        )}
      </div>
    </div>
  );
};

export default Navbar;
