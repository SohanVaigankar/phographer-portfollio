import React from "react";

// animations
import { motion } from "framer-motion";
import { titleAnimation, fade, photoAnimation } from "../utils/animation";

// images
import home1 from "../img/home1.png";

const About = () => {
  return (
    <div className="about section">
      <div className="description">
        <motion.div>
          <div className="hide">
            <motion.h2 variants={titleAnimation}>We work to make</motion.h2>
          </div>
          <div className="hide">
            <motion.h2 variants={titleAnimation}>
              your <span>dreams</span> come
            </motion.h2>
          </div>
          <div className="hide">
            <motion.h2 variants={titleAnimation}>true.</motion.h2>
          </div>
        </motion.div>
        <motion.p variants={fade}>
          Contact us for any photography/videography ideas that you have. We've
          professionals with amazing skills
        </motion.p>
        <motion.button variants={fade}>Contact Us</motion.button>
      </div>
      <motion.div className="image" variants={photoAnimation}>
        <img src={home1} alt="person with a camera" />
      </motion.div>
    </div>
  );
};

export default About;
