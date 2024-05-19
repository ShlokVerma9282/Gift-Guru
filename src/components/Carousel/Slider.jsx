import React,{useState} from "react";
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
  };

  const handleReviewClick = (review) => {
    setSearchTerm(review);
  };

  return (
    <div className="max-w-xl h-70">
      <div className="mt-2 mb-16">
        <Slider {...settings}>
          {data.map((d, index) => (
            <div key={index}>
              <div className="flex justify-center items-center w-3xl">
                <img
                  src={d.img}
                  alt=""
                  className="items-center h-60 rounded-lg border-black shadow-xl"
                />
              </div>

              <div
                className="bg-white h-22 w-lg font-italic text-black rounded-xl flex flex-col items-center justify-center gap-7 mt-3 mb-2 border-black shadow-lg cursor-pointer"
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
      "Best gift to share with your friends.",
  },
  {
    img: img2,
    review:
      "Best Candy to give this halloween season.",
  },
  {
    img: img3,
    review:
      "Best teddy bear for this valetine.",
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
