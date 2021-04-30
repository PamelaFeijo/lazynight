import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div className="main-footer">
      <h3 className="title-footer">
        LAZY<span>NIGHT</span>
      </h3>
      <FontAwesomeIcon icon={["fab", "instagram"]} className="icons-footer" />
      <FontAwesomeIcon icon={["fab", "facebook"]} className="icons-footer" />
      <FontAwesomeIcon icon={["fab", "linkedin"]} className="icons-footer" />
      <hr />
      <div>
        <p>&copy;{new Date().getFullYear()} LazyNight | All rights reserved</p>
      </div>
    </div>
  );
};
export default Footer;
