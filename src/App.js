import React from "react";
// react-router
import { Routes, Route, useLocation } from "react-router-dom";

import Nav from "./components/Nav";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import AboutUs from "./pages/AboutUs";
import PageNotFound from "./pages/PageNotFound";
import MovieDetails from "./pages/MovieDetails";
import ScrollToTop from "./components/ScrollToTop";

import "./styles/app.scss";

import { AnimatePresence } from "framer-motion";

const App = () => {
  const location = useLocation();

  return (
    <div className="App">
      <ScrollToTop />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route exact path="/" element={<AboutUs />} />
          <Route exact path="/work" element={<OurWork />} />
          <Route path="/work/:id" element={<MovieDetails />} />
          <Route exact path="/contact" element={<ContactUs />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default App;
