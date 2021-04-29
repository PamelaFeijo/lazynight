import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import "./Member.css";

function Member({ name, surname, img }) {
  return (
    <div>
      <img className="member-img" src={img} alt="" />
      <h1>
        {name} {surname}
      </h1>
      <i class="fab fa-github"></i>
    </div>
  );
}

export default Member;
