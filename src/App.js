import React, { useRef } from "react";
import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Services from "./components/Services/Services";
import Works from "./components/Works/Works";
import Ai from "./components/Ai/Ai";
import Portfolio from "./components/Slider/Slider";
import Testimonial from "./components/Recommendation/Recommendation";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  const introRef = useRef(null);
  const aboutRef= useRef(null);
  const servicesRef = useRef(null);
  const brandsRef = useRef(null);
  const listsRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="App bg-gray-50">
      <Navbar
        scrollToIntro={() => scrollToSection(introRef)}
        scrollToAbout={()=>scrollToSection(aboutRef)}
        scrollToServices={() => scrollToSection(servicesRef)}
        scrollToBrands={() => scrollToSection(brandsRef)}
        scrollToLists={() => scrollToSection(listsRef)}
      />
      <div className="ml-10">
        <div ref={introRef}>
          <Intro />
        </div>
        <div ref={aboutRef}>
        <Ai />
        </div>
        <div >
          <Portfolio />
        </div>
        <div ref={servicesRef}>
          <Services />
        </div>
        <div ref={brandsRef}>
          <Works />
        </div>
        <div ref={listsRef}>
        <Testimonial />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
