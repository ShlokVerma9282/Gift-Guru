import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "./images/img1.jpeg";
import img2 from "./images/img2.jpeg";
import img3 from "./images/img3.jpeg";
import "./Slider.css";
import Searchbar from "../SearchBar/Searchbar";

function Carousel() {
  const [searchTerm, setSearchTerm] = useState("");

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  const handleReviewClick = (review) => {
    setSearchTerm(review);
  };

  return (
    <div className="max-w-lg h-70">
      <div className="mt-2 mb-16">
        <Slider {...settings}>
          {data.map((d, index) => (
            <div key={index}>
              <div className="flex justify-center items-center w-full">
                <img
                  src={d.img}
                  alt=""
                  className="items-center h-71 rounded-lg border-black shadow-xl cursor-pointer"
                  onClick={() => handleReviewClick(d.review)}
                />
              </div>

              <div
                className="bg-white h-22 w-full font-italic text-black rounded-xl flex flex-col items-center justify-center gap-7 mt-3 mb-2 border-black shadow-lg cursor-pointer"
                onClick={() => handleReviewClick(d.review)}
              >
                <p className="text-center font-italic italic text-xs">
                  {d.review}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <Searchbar setExternalSearchTerm={searchTerm} />
    </div>
  );
}

const data = [
  {
    img: img1,
    review:
      "Celebrate love with a heartfelt gift that speaks volumes, showing your special someone how much they mean to youCelebrate love .",
  },
  {
    img: img2,
    review:
      "Cherish your friends with tokens of appreciation, strengthening the bond that makes your friendship unique and enduring.",
  },
  {
    img: img3,
    review:
      "Commemorate your union with a meaningful gift that symbolizes the love and commitment shared in your journey together.",
  },
  {
    img: img1,
    review:
      "Celebrate love with a heartfelt gift that speaks volumes, showing your special someone how much they mean to youCelebrate love .",
  },
  {
    img: img2,
    review:
      "Cherish your friends with tokens of appreciation, strengthening the bond that makes your friendship unique and enduring.",
  },
];

export default Carousel;
