import React, { useState } from "react";
import { ReactTyped } from "react-typed";
import Github from "../../img/facebookorange.png";
import messenger from "../../img/facebookmessenger.png";
import LinkedIn from "../../img/twitter.png";
import Instagram from "../../img/insta.png";
import {
  GenderInputForm,
  AgeRangeForm,
  EventTypeInputForm,
  CategorySelectionForm,
  PriceRangeInput,
  RecipientForm,
  Button,
} from "./Forms";
import GiftForm from "./GiftForm";
import Carousel from "../Carousel/Slider";
import GiftProducts from "./GiftProducts";
import Searchbar from "../SearchBar/Searchbar";  // Import Searchbar
import Geocode from "./Geocode";

const Intro = () => {
  const [showGiftProducts, setShowGiftProducts] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleButtonClick = () => {
    setShowGiftProducts(true);
  };

  const handleReviewClick = (review) => {
    setSearchTerm(review);
  };

  return (
    <div>
      {/* Intro container */}
      <div className="flex ml-10 mt-24 pb-20 pt-13">
        {/* left name side */}
        <div className="flex flex-col flex-1 gap-8 items-start">
          <div className="flex flex-col gap-2">
            <p className="font-bold text-5xl mt-10 text-orange-400 fuzzy-bubbles-bold">GiftGuru</p>
            <div className="flex justify-center items-center text-5xl mt-5">
              <p className="text-xl inline-block open-sans-regular font-bold">
                The ultimate destination for discovering the perfect gift for every occasion, offering an unparalleled selection of thoughtfully curated treasures for your
                <ReactTyped
                  className="inline-block text-orange-400 font-bold ml-1"
                  style={{ fontSize: "1.875rem" }}
                  strings={['Husband', 'Wife', 'Son', 'Daughter', 'Mother', 'Father', 'Friend']}
                  typeSpeed={120}
                  backSpeed={140}
                  loop
                />
              </p>
            </div>
          </div>
          
          {/* social icons */}
          <div className="flex gap-3">
            <img src={LinkedIn} alt="" className="transform scale-50 hover:scale-75" />
            <img src={Instagram} alt="" className="transform scale-50 hover:scale-75" />
            <img src={Github} alt="" className="transform scale-50 hover:scale-75" />
            <img src={messenger} alt="" className="transform scale-50 hover:scale-75" />
          </div>
          <div className="max-w-2xl p-2 bg-white shadow-md rounded-md">
            <Carousel onReviewClick={handleReviewClick} />
          </div>
        </div>
        
        {/* right image side */}
        <div className="flex flex-1 relative">
          <div className="max-w-2xl ml-10 p-8 bg-white shadow-md rounded-md">
            <GiftForm />
            <div className="mt-10">
        <Searchbar setExternalSearchTerm={searchTerm} />
      </div>
          </div>
        </div>
      </div>

      {/* GiftProducts container */}
      {showGiftProducts && (
        <div>
          <div className="flex ml-10 mr-10 p-8 bg-white shadow-md rounded-md" style={{ height: "70vh", width: "175vh" }}>
            {/* Left section with GiftProducts */}
            <div className="flex flex-col flex-1 w-1/2 pr-20">
              <GiftProducts />
            </div>
      
            {/* Vertical line */}
            <div className="border-l-2 border-orange-400"></div>
      
            {/* Right section with Geocode */}
            <div className="flex flex-col flex-1 w-1/2 pl-20">
              <Geocode /> 
            </div>
          </div>
        </div>
      )}
      
      {/* Searchbar below the GiftIdeas button */}
    
    </div>
  );
};

export default Intro;
