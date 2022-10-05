import React from "react";
import About from "../components/About";
import Services from "../components/Services";
import FAQ from "../components/FAQ";

// animations
import { motion } from "framer-motion";
import { pageAnimation } from "../utils/animation";

const AboutUs = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <About />
      <Services />
      <FAQ />
    </motion.div>
  );
};

export default AboutUs;
