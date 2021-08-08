import { useEffect, useState } from "react";

const styles = {
  transition: "all 1.5s ease-in-out",
};

function ContactMe() {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    setOpacity(100);
  }, []);
  return (
    <div>
      <ul id="icon-reflection" style={{ ...styles, opacity: opacity }}>
        <li className="icons">
          <a href="https://github.com/stamm2911">
            <i className="fab fa-github-square"></i> stamm2911
          </a>
        </li>

        <li className="icons">
          <a href="https://www.linkedin.com/in/eduardostamm/">
            <i className="fab fa-linkedin"></i> /in/eduardostamm
          </a>
        </li>
        <li className="icons">
          <i className="fas fa-envelope-square"></i> edstamm29@gmail.com
        </li>
        <li className="icons">
          <i className="fas fa-phone-square-alt"></i> +52 55 5107 3194
        </li>
      </ul>
    </div>
  );
}

export default ContactMe;
