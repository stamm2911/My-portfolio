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
        dsfsghdgh
        {/* {reRender} */}
      </div>
    </>
  );
}

export default AboutMe;
