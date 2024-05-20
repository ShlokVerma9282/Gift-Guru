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
        <div ref={menuRef} className="w-full max-w-full">
            <div className="border border-gray-600 p-2.5 flex items-center gap-5 rounded-full mb-2.5">
                <input
                    type="text"
                    className="outline-none border-0 w-full p-1.5 text-[1.2em]"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={handleChange}
                    onClick={() => setOpen(!open)}
                />
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5">
                    <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z" clipRule="evenodd" />
                </svg>
            </div>
            {open && (
                <ul className="w-full bg-white shadow-[rgba(100,100,111,0.2)_0px_7px_29px_0px] m-1 text-[#909090] list-none p-2.5">
                    {data.map(item => (
                        <li key={item.id} className="my-2.5 flex items-center gap-2.5 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-[15px]">
                                <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z" clipRule="evenodd" />
                            </svg>
                            <span>{item.title}</span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Searchbar;
