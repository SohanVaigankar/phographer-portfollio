import React from "react";
import { Link,  useLocation } from "react-router-dom";
import {  motion } from "framer-motion";

const Nav = () => {
  const regex = new RegExp(/\/work*/)
  const { pathname } = useLocation();

  return (
    <nav>
      <h1>
        <Link id="logo" to="/">
          Capture
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/">About Us</Link>
          <motion.div
            className="line"
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/" ? "50%" : "0%" }}
          ></motion.div>
        </li>
        <li>
          <Link to="/work">Our Work</Link>
          <motion.div
            className="line"
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: regex.test(pathname) ? "50%" : "0%" }}
          ></motion.div>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
          <motion.div
            className="line"
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/contact" ? "50%" : "0%" }}
          ></motion.div>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
