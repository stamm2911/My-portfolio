import Nav from "./components/Nav";
import WorkCarousel from "./components/WorkCarousel";
import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import { useState } from "react";
const shortid = require("shortid");

function App() {
  const [currentPage, setcurrentPage] = useState("AboutMe");

  const handlePageChange = (page) => {
    setcurrentPage(page);
    console.log(page);
  };
  // console.log(currentPage);

  const renderPage = () => {
    switch (currentPage) {
      case "AboutMe":
        return <AboutMe key={shortid.generate()} />;
      case "Work":
        return <WorkCarousel key={shortid.generate()} />;
      case "ContactMe":
        return <ContactMe key={shortid.generate()} />;
      default:
        return <AboutMe key={shortid.generate()} />;
    }
  };

  return (
    <>
      <Nav handlePageChange={handlePageChange} />
      <div className="top">{renderPage()}</div>
      <div className="bottom"></div>
    </>
  );
}

export default App;
