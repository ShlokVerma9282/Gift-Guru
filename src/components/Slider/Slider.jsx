import React, { useState, useEffect } from "react";
import "./Slider.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";

const Portfolio = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(products => {
        console.log("Fetched products:", products);
        setProducts(products);
      })
      .catch(error => console.error('Error fetching products:', error));
  }, []);
  

  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span className="fuzzy-bubbles-bold">Recent Selections</span>
      <span className="fuzzy-bubbles-bold">Best Buys</span>

      {/* slider */}
      <Swiper
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
      </Swiper>
    </div>
  );
};

export default Portfolio;
