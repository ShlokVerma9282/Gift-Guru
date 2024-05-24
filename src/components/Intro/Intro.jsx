import React, { useState } from "react";
import axios from "axios";
import { ReactTyped } from "react-typed";
import Github from "../../img/facebookorange.png";
import messenger from "../../img/facebookmessenger.png";
import LinkedIn from "../../img/twitter.png";
import Instagram from "../../img/insta.png";
import GiftForm from "./GiftForm";
import Carousel from "../Carousel/Slider";
import GiftProducts from "./GiftProducts";
import Searchbar from "../SearchBar/Searchbar";
import Geocode from "./Geocode";

const Intro = () => {
  const [showGiftProducts, setShowGiftProducts] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [giftIdeas, setGiftIdeas] = useState([]);
  const [error, setError] = useState("");
  const [showGiftIdeasContainer, setShowGiftIdeasContainer] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage] = useState(5);

  const handleButtonClick = () => {
    setShowGiftProducts(true);
  };

  const handleReviewClick = (review) => {
    setSearchTerm(review);
  };

  const handleGenerateGiftIdeas = (ideas, error) => {
    console.log("Generated gift ideas:", ideas); // Debugging line
    setGiftIdeas(ideas);
    setError(error);
    setShowGiftIdeasContainer(true);
    setCurrentPage(0); // Reset to first page on new ideas
  };

  const handleNextPage = () => {
    if ((currentPage + 1) * itemsPerPage < giftIdeas.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleGenerateMore = async () => {
    // Assuming you have a function to fetch more gift ideas
    try {
      const response = await axios.post('http://localhost:5000/generate_more_gift_ideas', { currentIdeas: giftIdeas });
      setGiftIdeas([...giftIdeas, ...response.data.gift_ideas]);
    } catch (error) {
      setError('Error generating more gift ideas');
    }
  };

  const startIndex = currentPage * itemsPerPage;
  const displayedIdeas = giftIdeas.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div>
      <div className="flex ml-10 mt-24 pb-20 pt-13">
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

          <div className="flex gap-3">
            <img src={LinkedIn} alt="LinkedIn" className="transform scale-50 hover:scale-75" />
            <img src={Instagram} alt="Instagram" className="transform scale-50 hover:scale-75" />
            <img src={Github} alt="Github" className="transform scale-50 hover:scale-75" />
            <img src={messenger} alt="Messenger" className="transform scale-50 hover:scale-75" />
          </div>
          <div className="max-w-2xl p-2 bg-white shadow-md rounded-md">
            <Carousel onReviewClick={handleReviewClick} />
          </div>
        </div>

        <div className="flex flex-1 relative">
          <div className="max-w-2xl ml-10 p-8 bg-white shadow-md rounded-md">
            <GiftForm onGenerateGiftIdeas={handleGenerateGiftIdeas} />
            <div className="mt-10">
              <Searchbar setExternalSearchTerm={searchTerm} />
            </div>
          </div>
        </div>
      </div>

      {showGiftIdeasContainer && (
        <div className="w-12/12 ml-10 mr-10 h-80 bg-orange-400 text-white p-4">
          {error && <p>{error}</p>}
          <ul>
            {displayedIdeas.map((idea, index) => (
              <li key={index}>
                <strong>{idea.Product_name}</strong>: {idea.Reason}
              </li>
            ))}
          </ul>
          <div className="flex justify-between mt-4">
            <button onClick={handlePreviousPage} disabled={currentPage === 0} className="bg-white text-orange-400 px-4 py-2 rounded">
              Previous
            </button>
            <button onClick={handleNextPage} disabled={(currentPage + 1) * itemsPerPage >= giftIdeas.length} className="bg-white text-orange-400 px-4 py-2 rounded">
              Next
            </button>
          </div>
          <div className="mt-4">
            <button onClick={handleGenerateMore} className="bg-white text-orange-400 px-4 py-2 rounded">
              Generate More
            </button>
          </div>
        </div>
      )}

      {showGiftProducts && (
        <div>
          <div className="flex ml-10 mr-10 p-8 bg-white shadow-md rounded-md" style={{ height: "70vh", width: "175vh" }}>
            <div className="flex flex-col flex-1 w-1/2 pr-20">
              <GiftProducts />
            </div>
            <div className="border-l-2 border-orange-400"></div>
            <div className="flex flex-col flex-1 w-1/2 pl-20">
              <Geocode />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Intro;
