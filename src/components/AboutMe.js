import { useEffect, useState } from "react";
import image from "../img/golden.jpg";
const shortid = require("shortid");

const styles = {
  transition: "all 1.5s ease-in-out",
};

function AboutMe() {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    setOpacity(100);
  }, []);

  return (
    <>
      <div className="container-test" style={{ ...styles, opacity: opacity }}>
        <p>
        Front-end developer, creative, problem solver, quick thinker and more...
          <br />
          I like to apply and integrate well known technologies like REACT and JavaScript, or any other new one that I discover, to create original work, or to solve any challenge more efficiently. I´m a +2 years experience developer who loves learning new technologies, new perspectives, and breaking paradigms.
        </p>
        <ul>
          <h2>TECHNICAL SKILLS</h2>
          <li>● Languages: JavaScript ES6+, CSS3, HTML5, SQL, NoSQL</li>
          <li>● Applications: GitHub, MongoDB, MySQL </li>
          <li>
            ● Tools: Express, React, Node, Handlebars, jQuery, Bootstrap,
            Materialize, NPM
          </li>
        </ul>
      </div>
    </>
  );
}

export default AboutMe;
