import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider } from "./Context";

ReactDOM.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// import React from "react";
// import Card from "../Card/Card";
// import HeartEmoji from "../../img/gift.png";
// import Glasses from "../../img/glasses.png";
// import Humble from "../../img/Sparkle.jpg";
// import { motion } from "framer-motion";

// const Services = () => {
//   // transition
//   const transition = {
//     duration: 1,
//     type: "spring",
//   };

//   return (
//     <div className="mt-10 lg:mt-32 ml-5 lg:ml-40 mr-5 lg:mr-0">
//       <div className="services" id="services">
//         <div className="lg:flex lg:justify-between flex-col-reverse lg:flex-row">
//           {/* left side */}
//           <div className="lg:w-2/5 pr-5">
//             <div className="cards">
//               {/* first card */}
//               <motion.div
//                 initial={{ left: "15rem" }}
//                 whileInView={{ left: "10rem" }}
//                 transition={transition}
//                 className="relative lg:flex lg:mr-8 mb-8 lg:mb-0"
//               >
//                 <Card
//                   emoji={HeartEmoji}
//                   detail={"Explore our curated selection that is sure to delight"}
//                 />
//               </motion.div>
//               {/* second card */}
//               <motion.div
//                 initial={{ left: "-11rem", top: "12rem" }}
//                 whileInView={{ left: "-4rem" }}
//                 transition={transition}
//                 className="relative lg:flex lg:mr-8 mb-8 lg:mb-0"
//               >
//                 <Card
//                   emoji={Glasses}
//                   detail={"Discover gifts that sparkle with joy and make every moment memorable!"}
//                 />
//               </motion.div>
//               {/* third card */}
//               <motion.div
//                 initial={{ top: "19rem", left: "25rem" }}
//                 whileInView={{ left: "12rem" }}
//                 transition={transition}
//                 className="relative lg:flex lg:mr-8 mb-8 lg:mb-0"
//               >
//                 <Card
//                   emoji={Humble}
//                   detail={"Gifts that glow with the warmth of a thousand stars!"}
//                   color="rgba(252, 166, 31, 0.45)"
//                 />
//               </motion.div>
//             </div>
//           </div>
//           {/* right side */}
//           <div className="lg:w-3/5 pl-5 lg:pl-20">
//             <div className="pt-20 lg:pt-40">
//               <div className="awesome">
//                 <span className="block mt-5 lg:mt-10 font-bold text-black text-2xl">Our Awesome</span>
//                 <span className="block font-bold text-orange text-2xl">services</span>
//                 <div></div>
//                 <span className="block text-base">
//                   Unlock the Art of Thoughtful Gifting at GiftGuru.co.in!
//                   <br />
//                   Navigate our constellation of curated treasures and unveil
//                   <br />
//                   the perfect gift with cosmic ease. Begin your journey today,
//                   <br />
//                   where every click whispers a personalized surprise.
//                 </span>
//                 <div className="blur s-blur1 bg-opacity-50" style={{ backgroundColor: "#ABF1FF94" }}></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Services;
