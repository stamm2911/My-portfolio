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
          I'm a front-end developer looking for new and challenging professional
          experiences. My goal is to improve my programming skills, while
          contributing in my work area. I aim to learn and grow in all aspects
          of life, both personally and professionally.
        </p>
        {/* {reRender} */}
      </div>
    </>
  );
}

export default AboutMe;
