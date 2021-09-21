import NavTitle from "./NavTitle";
import NavButton from "./NavButton";
import CV from '../assets/EDUARDO_STAMM_CV.pdf'

const styles = {
  bg: {
    backgroundColor: "rgb(0, 0, 0)",
  },
};

function Nav({handlePageChange}) {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg pb-4 navbar-dark pt-3"
        style={styles.bg}
      >
        <div className="container-fluid">
          <a className="own-reflection glowing-button" href="#">
            Eduardo Stamm
          </a>
          {/* <NavTitle/> */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul className="navbar-nav ms-auto">
              <li>
                <NavButton section={"AboutMe"} handlePageChange={handlePageChange}/>
              </li>
              <li>
                <NavButton section={"Work"} handlePageChange={handlePageChange}/>
              </li>
              <li>
                <NavButton section={"ContactMe"} handlePageChange={handlePageChange}/>
              </li>
              <li>
                {/* <NavButton section={"Resume"} /> */}
                <a className="underline" href={CV} download><NavButton section={"Resume"} handlePageChange={handlePageChange}/></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
