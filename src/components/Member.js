import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import "./Member.css";

function Member({ name, surname, img, linkedin, github }) {
  return (
    <div>
      <img className="member-img" src={img} alt="" />
      <h2>{name}</h2>
      <h2>{surname}</h2>
      <div className="icons-container">
        <a href={github}>
          <FontAwesomeIcon icon={["fab", "github"]} className="icons" />
        </a>
        <a href={linkedin}>
          {" "}
          <FontAwesomeIcon icon={["fab", "linkedin"]} className="icons" />
        </a>
      </div>
    </div>
  );
}

export default Member;
