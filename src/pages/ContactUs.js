import React from "react";

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
        <motion.div className="social-handles" variants={titleAnimation}>
          <motion.div className="circle"></motion.div>
          <h2>Send Us A Message</h2>
        </motion.div>
      </div>
      <div className="hide">
        <motion.div className="social-handles" variants={titleAnimation}>
          <motion.div className="circle"></motion.div>
          <h2>Send Us An Email</h2>
        </motion.div>
      </div>
      <div className="hide">
        <motion.div className="social-handles" variants={titleAnimation}>
          <motion.div className="circle"></motion.div>
          <h2>send us a message</h2>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContactUs;
