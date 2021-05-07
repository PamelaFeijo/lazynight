import "./Contact.css";
import CountrySelector from "./CountrySelector";
import Bounce from "react-reveal";
import { useState } from "react";

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleSubmit() {
    setIsSubmitted(true);
  }

  return (
    <div className="form-container">
      {isSubmitted ? (
        <h1 className="claim">Thanks for contacting us!</h1>
      ) : (
        <div></div>
      )}

      <div className="contact-us">
        <h1 className="claim">
          We like food, movies and... friends! Get in contact!
        </h1>
      </div>
      <Bounce cascade>
        <form>
          <label for="fname">First Name</label>
          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="Your name.."
          ></input>

          <label for="lname">Last Name</label>
          <input
            type="text"
            id="lname"
            name="lastname"
            placeholder="Your last name.."
          ></input>

          <label for="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Your email.."
          ></input>

          <label for="country">Country</label>
          <CountrySelector />

          <label for="subject">Subject</label>
          <textarea
            id="subject"
            name="subject"
            placeholder="Here goes your message for us.."
          ></textarea>

          <input
            className="submit"
            type="submit"
            value="Submit"
            onClick={handleSubmit}
          ></input>
        </form>
      </Bounce>
    </div>
  );
};

export default Contact;
