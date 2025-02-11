// create pages: Home and About.
// Implement routing using React Router DOM.
// Create navigation links to switch between the Home and About pages.
// Display appropriate content on each page.
// Add a "404 Not Found" page for any invalid routes.

import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import ErrorPage from "./ErrorPage";

const Routing = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/aboutt" element={<About />} />
      <Route path="*" element={<ErrorPage/>}/>
    </Routes>
  );
};

export default Routing;
