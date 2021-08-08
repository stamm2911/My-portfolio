import { useEffect, useState } from "react";
import techBlog from "../img/tech-blog.PNG";
import covidTracker from "../img/covid-tracker.PNG";
import pawbook from "../img/pawbook.JPG";
import weatherDashboard from "../img/weather-dashboard.PNG";
import workoutTracker from "../img/workout-tracker.PNG";

// import image from "../img/golden.jpg";
const shortid = require("shortid");

const styles = {
  slide: {
    height: "400px",
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
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>
        <figure className="carousel-inner">
          <div className="carousel-item active filter" data-bs-interval="2000">
            <a href="https://mighty-castle-38499.herokuapp.com/">
              <img
                src={techBlog}
                className="d-block w-100"
                style={styles.slide}
                alt="techblog"
              />
            </a>
            <div className="carousel-caption d-none d-md-block"></div>
          </div>
          <div className="carousel-item filter" data-bs-interval="2000">
            <a href="https://gutihi85.github.io/covid_tracker/">
              <img
                src={covidTracker}
                className="d-block w-100"
                style={styles.slide}
                alt="covid-tracker"
              />
            </a>
            <div className="carousel-caption d-none d-md-block"></div>
          </div>
          <div className="carousel-item filter">
            <a href="https://stormy-savannah-69028.herokuapp.com/login">
              <img
                src={pawbook}
                className="d-block w-100"
                style={styles.slide}
                alt="pawbook"
              />
            </a>
            <div className="carousel-caption d-none d-md-block"></div>
          </div>
          <div className="carousel-item filter" data-bs-interval="2000">
            <a href="https://desolate-wildwood-80171.herokuapp.com">
              <img
                src={workoutTracker}
                className="d-block w-100"
                style={styles.slide}
                alt="workout-tracker"
              />
            </a>
            <div className="carousel-caption d-none d-md-block"></div>
          </div>
        </figure>
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
