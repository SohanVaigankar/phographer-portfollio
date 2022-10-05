import React from "react";
import { Link } from "react-router-dom";

// images
import athelete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";

// animations
import { motion } from "framer-motion";
import {
  pageAnimation,
  fade,
  photoAnimation,
  lineAnimation,
} from "../utils/animation";



const OurWork = () => {
  return (
    <motion.div
      className="work"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: "whiteSmoke" }}
    >
      <div className="movie">
        <motion.h2 variants={fade}>The Athelete</motion.h2>
        <motion.div className="line" variants={lineAnimation}></motion.div>
        <Link to="/work/the-athelete">
          <motion.div className="hide">
            <motion.img
              variants={photoAnimation}
              src={athelete}
              alt="athelete"
            />
          </motion.div>
        </Link>
      </div>
      <div className="movie">
        <motion.h2 variants={fade}>The Racer</motion.h2>
        <motion.div className="line" variants={lineAnimation}></motion.div>
        <Link to="/work/the-racer">
          <motion.div className="hide">
            <motion.img
              variants={photoAnimation}
              src={theracer}
              alt="the racer"
            />
          </motion.div>
        </Link>
      </div>
      <div className="movie">
        <motion.h2 variants={fade}>Goodtimes</motion.h2>
        <motion.div className="line" variants={lineAnimation}></motion.div>
        <Link to="/work/goodtimes">
          <motion.div className="hide">
            <motion.img
              variants={photoAnimation}
              src={goodtimes}
              alt="goodtimes"
            />
          </motion.div>
        </Link>
      </div>
    </motion.div>
  );
};

export default OurWork;
