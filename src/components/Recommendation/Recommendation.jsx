import React from "react";
import "./Recommendation.css";
import Carousel from "./Carousel";

const Recommendation = () => {
  

  return (
    <div className="ml-10">
      <div id="testimonial">
        <div className="t-heading">
          <span>Our Curated </span>
          <span>best list </span>
          <span>for...</span>
        </div>
        <Carousel />
      </div>
    </div>
  );
};

export default Recommendation;
