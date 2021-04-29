import "./About.css";
import Member from "./Member";

const memberInfo = [
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
          <Member
            name={member.name}
            surname={member.surname}
            img={member.img}
            linkedin={member.linkedin}
            github={member.github}
          />
        ))}
      </div>
    </div>
  );
};

export default About;
