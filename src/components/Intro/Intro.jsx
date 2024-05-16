import React from "react";
import Typed from 'react-typed';
import Github from "../../img/facebookorange.jpg";
import LinkedIn from "../../img/twitter.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import { Link } from "react-scroll";

const Intro = () => {
  return (
    <div className="flex ml-10 mt-24 pb-30 pt-10">
      {/* left name side */}
      <div className="flex flex-col flex-1 gap-8 items-start">
        <div className="flex flex-col gap-2">
          
          <span className="font-bold text-5xl text-orange-400">GiftGuru</span>
          <span className="text-xl mt-3">Unlock the Art of Thoughtful Gifting at GiftGuru.co.in!<br/>Navigate our constellation of curated treasures and unveil<br/> the perfect gift with cosmic ease. Begin your journey today,<br/> where every click whispers a personalized surprise.</span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded-xl">Get Gift</button>
        </Link>
        {/* social icons */}
        <div className="flex gap-2 mt-6">
          <img src={Github} alt="" className="transform scale-50 hover:scale-75" />
          <img src={LinkedIn} alt="" className="transform scale-50 hover:scale-75" />
          <img src={Instagram} alt="" className="transform scale-50 hover:scale-75" />
        </div>
      </div>
      {/* right image side */}
      <div className="flex flex-1 relative">
        <img src={Vector1} alt="" className="absolute scale-75 -left-15 -top-9" />
        <img src={Vector2} alt="" className="absolute scale-75 -left-3 -top-18" />
        <img src={boy} alt="" className="absolute scale-125 left-28" />
      </div>
    </div>
  );
};

export default Intro;
