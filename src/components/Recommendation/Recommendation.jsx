import React from "react";
import "./Recommendation.css";
import profilePic1 from "../../img/Valentine.jpg";
import profilePic2 from "../../img/birthday.jpg";
import profilePic3 from "../../img/graduation.jpg";
import profilePic4 from "../../img/christmas.jpg";
import Carousel from "./Carousel";

const Recommendation = () => {
  const clients = [
    {
      img: profilePic1,
      head:"Best 2024 Valentine gift for your partner"
      ,
      review:
        "A personalized constellation map highlighting the night sky on the date and location of your first meeting.",
    },
    {
      img: profilePic2,
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
    },
    {
      img: profilePic3,
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
    },
    {
      img: profilePic4,
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
    },
  ];

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
