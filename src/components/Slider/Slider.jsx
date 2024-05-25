import React from "react";
import "swiper/css";
import ProductCarousel from "./ProductCarousel";

const Portfolio = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[70vh] mt-24 " id="portfolio">
      {/* heading */}
      <span className="text-black text-2xl font-bold fuzzy-bubbles-bold">Recent Selections</span>
      <span className="text-orange-500 text-2.5xl font-bold fuzzy-bubbles-bold">Best Buys</span>

      {/* slider */}
      <div className="w-full max-w-5xl mx-auto mt-10">
        <ProductCarousel />
      </div>
    </div>
  );
};

export default Portfolio;
