import React from "react";
//animation
import { motion } from "framer-motion";
import { pageAnimation } from "../utils/animation";

const PageNotFound = () => {
  return (
    <motion.div
      className="page-not-found"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <h1>Oops! Looks like you've slipped off the track :p</h1>
      <p>The page you're looking for doesn't exist</p>
    </motion.div>
  );
};

export default PageNotFound;
