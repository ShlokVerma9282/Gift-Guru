import React from "react";
import "./Slider.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import ama1 from "../../img/1amazon.jpg";
import ama2 from "../../img/2amazon.jpg";
import ama3 from "../../img/3amazon.jpg";
import ama4 from "../../img/4amazon.jpg";
import ama5 from "../../img/5amazon.jpg";
import ama6 from "../../img/6amazon.jpg";
import ama7 from "../../img/7amazon.jpg";

const Portfolio = () => {
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span>Recent Selections</span>
      <span>Best Buys</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={ama1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ama2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ama3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ama4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ama5} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ama6} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ama7} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
