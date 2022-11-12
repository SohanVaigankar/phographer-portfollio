import React from "react";
import { Link } from "react-router-dom";

//animation
import { motion } from "framer-motion";
import { titleAnimation, pageAnimation } from "../utils/animation";

const ContactUs = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: "#fff" }}
      className="contact"
    >
      <div className="title">
        <div className="hide">
          <motion.h2 variants={titleAnimation}>Get in touch.</motion.h2>
        </div>
      </div>
      <div className="hide">
        <motion.div
          className="social-handles twitter"
          variants={titleAnimation}
        >
          <motion.div className="circle"></motion.div>
          <Link to="https://twitter.com/sohanv_" className="twitter">slide into our DMs</Link>
        </motion.div>
      </div>
      <div className="hide">
        <motion.div className="social-handles email" variants={titleAnimation}>
          <motion.div className="circle"></motion.div>
          <Link to="#"className="email">send us an email</Link>
        </motion.div>
      </div>
      <div className="hide">
        <motion.div className="social-handles" variants={titleAnimation}>
          <motion.div className="circle"></motion.div>
          <h2>
            <span>phone:</span> (+91) 420-694-2069
          </h2>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContactUs;
