import React from "react";
import "./Slider.css";
import "swiper/css";
import ProductCarousel from "./ProductCarousel";


const Portfolio = () => {
  
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span className="fuzzy-bubbles-bold">Recent Selections</span>
      <span className="fuzzy-bubbles-bold">Best Buys</span>

      {/* slider */}
      <div className="max-w-5xl mx-auto mt-10">
        <ProductCarousel />
      </div>
      {/*<Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        {products.map(product => (
          <SwiperSlide key={product.id}>
            <div className="product">
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <p>${product.price}</p>
              <p>{product.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>*/}
    </div>
  );
};

export default Portfolio;
