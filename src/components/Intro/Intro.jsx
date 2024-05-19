import React from "react";
import { ReactTyped } from "react-typed";
import Github from "../../img/facebookorange.png";
import messenger from "../../img/facebookmessenger.png"
import LinkedIn from "../../img/twitter.png";
import Instagram from "../../img/insta.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import Forms from "./Forms";
import Carousel from "../Carousel/Slider";


const Intro = () => {
  return (
    <div className="flex ml-10 mt-24 pb-20 pt-13">
      {/* left name side */}
      <div className="flex flex-col flex-1 gap-8 items-start">
        <div className="flex flex-col gap-2">
        <p className="font-bold text-5xl mt-10 text-orange-400 fuzzy-bubbles-bold ">GiftGuru</p>
          <div className='flex justify-center items-center text-5xl mt-5'>
            <p className="text-xl inline-block open-sans-regular font-bold">
                The ultimate destination for discovering the perfect gift for every occasion,<br/> offering an unparalleled selection of thoughtfully curated treasures for your&nbsp;
            </p>
        </div>
            <ReactTyped
            className="inline-block text-orange-400 font-bold" // Removed text-3xl, applied inline-block
            style={{ fontSize: "1.875rem" }} // Adjust font size to 3xl (1.875rem)
            strings={['Husband', 'Wife', 'Son','Daughter','Mother','Father','Friend']}
            typeSpeed={120}
            backSpeed={140}
            loop
        />
        </div>
        
        {/* social icons */}
        <div className="flex gap-3">
          <img src={LinkedIn} alt="" className="transform scale-50 hover:scale-75" />
          <img src={Instagram} alt="" className="transform scale-50 hover:scale-75" />
          <img src={Github} alt="" className="transform scale-50 hover:scale-75" />
          <img src={messenger} alt="" className="transform scale-50 hover:scale-75" />
        </div>
        <div className="max-w-2xl p-2 bg-white shadow-md rounded-md">
<Carousel/>
</div>
      </div>
      {/* right image side */}
      <div className="flex flex-1 relative">
              <div className="max-w-2xl ml-10 p-8 bg-white shadow-md rounded-md">
                <Forms.GenderInputForm />
                <Forms.AgeRangeForm />
                <Forms.EventTypeInputForm />
                <Forms.RecipientForm />
                <Forms.CategorySelectionForm />
                <Forms.PriceRangeInput />
              </div>
      </div>
      

      </div>



  );
};

export default Intro;
