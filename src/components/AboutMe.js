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
          Creative, problem solver, quick thinker and more...
          <br />
          Combining art and logic, analysis and imagination made me choose
          to become a front-end developer who loves learning new perspectives,
          new technologies, and breaking paradigms.
        </p>
        <ul>
          <h2>TECHNICAL SKILLS</h2>
          <li>● Languages: JavaScript ES6+, CSS3, HTML5, SQL, NoSQL</li>
          <li>● Applications: GitHub, MongoDB, MySQL </li>
          <li>
            ● Tools: Express, React, Node,Handlebars, jQuery, Bootstrap,
            Materialize
          </li>
        </ul>
      </div>
    </>
  );
}

export default AboutMe;
