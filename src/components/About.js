import "./About.css";
import Member from "./Member";

const memberInfo = [
  {
    name: "Pamela",
    surname: "Feijò",
    img: "https://i.ibb.co/Nm8fq4r/pamela.jpg",
    linkedin: "https://www.linkedin.com/in/pamelafeijo/",
    github: "https://github.com/PamelaFeijo",
  },
  {
    name: "Francesco",
    surname: "Luciani",
    img:
      "https://i.ibb.co/4dfDK04/Portrait-picture-Francesco-Luciani-copia.jpg",
    linkedin: "https://www.linkedin.com/in/lucianifrancesco/",
    github: "https://github.com/francescoluciani",
  },
  {
    name: "Anca",
    surname: "Gheorge",
    img: "http://placekitten.com/200/300",
    linkedin: "",
    github: "",
  },
];

const About = () => {
  return (
    <div className="container">
      <div className="intro">
        <p>
          Hello lazy fellow! We are a group of 3 fullstack developers from the
          Wild Code School coding bootcamp. Please feel free to visit our
          LinkedIn and GitHub profiles to know more about each of us.
        </p>
      </div>
      <div className="member-container">
        {memberInfo.map((member) => (
          <div className="member-card">
            <Member
              name={member.name}
              surname={member.surname}
              img={member.img}
              linkedin={member.linkedin}
              github={member.github}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
