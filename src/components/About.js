import "./About.css";
import Member from "./Member";
import Bounce from "react-reveal";

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
    surname: "Gheorghe",
    img: "https://i.ibb.co/9ZCW0gh/IMG-7584.jpg",
    linkedin: "https://www.linkedin.com/in/anca-laura-gheorghe-7001151b9/",
    github: "https://github.com/anca2196",
  },
];

const About = () => {
  return (
    <div className="container">
      <div className="intro">
        <p className="intro-p">
          Hello lazy fellow! We are a group of 3 fullstack developers from the
          Wild Code School coding bootcamp. Please feel free to visit our
          LinkedIn and GitHub profiles to know more about each of us.
        </p>
      </div>
      <Bounce left cascade>
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
      </Bounce>
    </div>
  );
};

export default About;
