import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "./images/img1.jpeg";
import img2 from "./images/img2.jpeg";
import img3 from "./images/img3.jpeg";
import "./Slider.css";
import Searchbar from "../SearchBar/Searchbar";

function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className="max-w-md h-70">
      <div className="mt-2 mb-16">
        <Slider {...settings}>
          {data.map((d, index) => (
            <div key={index}>
              <div className="flex justify-center items-center w-3xl">
                <img
                  src={d.img}
                  alt=""
                  className="items-center h-70 rounded-lg border-black shadow-xl"
                />
              </div>

              <div className="bg-white h-22 w-lg font-italic text-black rounded-xl flex flex-col items-center justify-center gap-7 mt-3 mb-2 border-black shadow-lg">
                <p className="text-center font-italic italic text-xs">
                  {d.review}
                </p>
              </div>
            </div>
          ))}
        </Slider>
       
      </div>
      <Searchbar/>
    </div>
  );
}

const data = [
  {
    img: img1,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
  },
  {
    img: img2,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
  },
  {
    img: img3,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
  },
  {
    img: img1,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
  },
  {
    img: img2,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
  },
];

export default Carousel;
