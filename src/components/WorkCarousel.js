import { useEffect, useState } from "react";
import techBlog from "../img/tech-blog.PNG";
import covidTracker from "../img/covid-tracker.PNG";
import inspire from "../img/inspire.JPG";
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
        className="carousel carousel-dark slide shadow rounded"
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
          <div className="carousel-item active" data-bs-interval="3500">
            <div className="zindex">
              <ul>
                <li>Tech Blog</li>
                <br />
                <li>
                  ● Summary: CMS-style blog site to publish articles, blog
                  posts, thoughts and opinions.{" "}
                </li>
                <br />
                <li>● Role: Sole Full Stack author</li>
                <br />
                <li>
                  ● Tools: HTML, CSS, JavaScript, Handlebars, Bootstrap,
                  GoogleFonts, Express, MySQL
                </li>
              </ul>
            </div>
            <div className="filter">
              <a href="https://mighty-castle-38499.herokuapp.com/">
                <img
                  src={techBlog}
                  className="d-block w-100"
                  style={styles.slide}
                  alt="techblog"
                />
                <div className="carousel-caption d-none d-md-block"></div>
              </a>
            </div>
          </div>

          <div className="carousel-item " data-bs-interval="3500">
            <div className="zindex">
              <ul>
                <li>INSPIRE</li>
                <br />
                <li>
                  ● Summary: Social network not only to post what's on your
                  mind, but to enter a marketplace, browse available items and
                  purchase them
                </li>
                <br />
                <li>● Role: Market Place Full Stack developer</li>
                <br />
                <li>
                  ● Tools: HTML, CSS, JavaScript, Materialize, Mongoose,
                  Express, REACT, Node, GraphQL and Stripe payment
                </li>
              </ul>
            </div>
            <div className="filter">
              <a href="https://salty-reaches-45303.herokuapp.com/marketplace">
                <img
                  src={inspire}
                  className="d-block w-100"
                  style={styles.slide}
                  alt="covid-tracker"
                />
              </a>
              <div className="carousel-caption d-none d-md-block"></div>
            </div>
          </div>
          <div className="carousel-item " data-bs-interval="3500">
            <div className="zindex">
              <ul>
                <li>COVID-19 TRACKER</li>
                <br />
                <li>
                  ● Summary: App to keep users informed about Covid-19
                  statistics and relevant news, per country and globally.
                </li>
                <br />
                <li>● Role: Front End Developer</li>
                <br />
                <li>
                  ● Tools: HTML, CSS, JavaScript, jQuery, API, Bootstrap, Font
                  Awesome
                </li>
              </ul>
            </div>
            <div className="filter">
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
          </div>

          <div className="carousel-item " data-bs-interval="3500">
            <div className="zindex">
              <ul>
                <li>PAWBOOK</li>
                <br />
                <li>
                  ● Summary: Social network to not only post, find and/or adopt
                  lost pets, but also to donate food for stray animals
                </li>
                <br />
                <li>● Role: Full Stack Developer</li>
                <br />
                <li>
                  ● Tools: HTML, CSS, JavaScript, Handlebars, Bootstrap,
                  GoogleFonts, Express, MySQL
                </li>
              </ul>
            </div>
            <div className="filter">
              <a href="https://stormy-savannah-69028.herokuapp.com/login">
                <img
                  src={pawbook}
                  className="d-block w-100"
                  style={styles.slide}
                  alt="covid-tracker"
                />
              </a>
              <div className="carousel-caption d-none d-md-block"></div>
            </div>
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
