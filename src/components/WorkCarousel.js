import { useEffect, useState } from "react";
import image from "../img/rottweiler.jpg";
// import image from "../img/golden.jpg";
const shortid = require("shortid");

const styles = {
  slide: {
    height: "300px",
    width: "20px",
    objectFit: "cover",
  },
  transition: "all 1.5s ease-in-out",
};

function WorkCarousel() {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    setOpacity(100);
  }, []);

  return (
    <div className="container-wrapper" style={{ ...styles, opacity: opacity }}>
      {/* <img src={image} alt="dog" /> */}
      <div
        id="carouselExampleDark"
        className="carousel carousel-dark slide shadow bg-body rounded"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner ">
          <div className="carousel-item active" data-bs-interval="10000">
            <a href="#">
              <img
                src={image}
                className="d-block w-100"
                style={styles.slide}
                alt={image}
              />
            </a>
            <div className="carousel-caption d-none d-md-block"></div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img
              src={image}
              className="d-block w-100"
              style={styles.slide}
              alt={image}
            />
            <div className="carousel-caption d-none d-md-block"></div>
          </div>
          <div className="carousel-item">
            <img
              src={image}
              className="d-block w-100"
              style={styles.slide}
              alt={image}
            />
            <div className="carousel-caption d-none d-md-block"></div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default WorkCarousel;
