import React, { useEffect, useRef, useState } from "react";
import "tailwindcss/tailwind.css";

const Searchbar = ({ setExternalSearchTerm }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const menuRef = useRef();

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    // Perform search action here with searchTerm
    console.log("Search term:", searchTerm);
  };

  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        // Do something if needed when clicking outside
      }
    };

    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  useEffect(() => {
    if (setExternalSearchTerm) {
      setSearchTerm(setExternalSearchTerm);
    }
  }, [setExternalSearchTerm]);

  return (
    <div ref={menuRef} className="w-full max-w-full px-4 py-2">
      <div className="flex items-center gap-2">
        <input
          type="text"
          className="outline-none border border-gray-300 rounded-full py-2 px-4 w-full text-lg text-gray-700 placeholder-gray-400 focus:ring-0"
          placeholder="Search"
          value={searchTerm}
          onChange={handleChange}
        />
        <button
          className="bg-blue-500 text-white rounded-full py-2 px-4 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Searchbar;
