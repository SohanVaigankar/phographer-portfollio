import React, { useState } from "react";

import Toggle from "./Toggle";

import { AnimateSharedLayout } from "framer-motion";

const FAQ = () => {
  return (
    <div className="faq section">
      <h2>
        Any Question? <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="How do I start?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere,
              modi!
            </p>
          </div>
        </Toggle>

        <Toggle title="What products do you offer?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere,
              modi!
            </p>
          </div>
        </Toggle>
        <Toggle title="Daily Schedule">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere,
              modi!
            </p>
          </div>
        </Toggle>
        <Toggle title="Diferent Payment Methods">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere,
              modi!
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </div>
  );
};

export default FAQ;
