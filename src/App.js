import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Services from "./components/Services/Services";
import "./App.css";
import Works from "./components/Works/Works";
import Ai from "./components/Ai/Ai";
import Portfolio from "./components/Slider/Slider";
import Testimonial from "./components/Recommendation/Recommendation";
import Footer from "./components/Footer/Footer";
import Carousel from "./components/Carousel/Slider";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div>
        <Intro />
      </div>
      <Ai />
      <Services />
      <Works />
      <Portfolio />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
