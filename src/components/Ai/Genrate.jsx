import React, { useState } from "react";

const GenderInputForm = () => {
  const [selectedGender, setSelectedGender] = useState(""); // State to store selected gender

  const handleGenderChange = (event) => {
    const gender = event.target.value;
    setSelectedGender(gender); // Update selected gender state
    console.log(`Gender selected: ${gender}`);
  };

  return (
    <div>
      <div className=" max-w-md mx-auto p-4">
        <label htmlFor="gender" className="text-m font-semibold mb-3">
          Select Gender:
        </label>
        <select
          id="gender"
          name="gender"
          className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          value={selectedGender} // Bind selected gender to state
          onChange={handleGenderChange}
        >
          <option disabled value="">
            Select Gender
          </option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>{" "}
    </div>
  );
};

class AgeRangeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: "1-10", // Default selected option
    };
  }

  handleOptionChange = (event) => {
    this.setState({
      selectedOption: event.target.value,
    });
  };

  render() {
    return (
      <div className="max-w-md mx-auto p-4">
        <label htmlFor="age-range" className="text-m font-semibold mb-3">
          Age Range:
        </label>
        <select
          id="age-range"
          name="age-range"
          value={this.state.selectedOption}
          onChange={this.handleOptionChange}
          className="block w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-indigo-500"
        >
          <option value="1-10">1-10</option>
          <option value="11-20">11-20</option>
          <option value="21-30">21-30</option>
          <option value="31-40">31-40</option>
          <option value="41-50">41-50</option>
          <option value="51-60">51-60</option>
          <option value="61-70">61-70</option>
          <option value="71-80">71-80</option>
          <option value="81-90">81-90</option>
          <option value="91-100">91-100</option>
        </select>
      </div>
    );
  }
}

const EventTypeInputForm = () => {
  const handleEventTypeChange = (event) => {
    const eventType = event.target.value;
    console.log(`Event type selected: ${eventType}`);
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <label htmlFor="event-type" className="text-m font-semibold mb-3">
        Select Occasion:
      </label>
      <select
        id="event-type"
        name="event-type"
        className="block w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-indigo-500"
        onChange={handleEventTypeChange}
      >
        <option disabled value="">
          Select Event Type
        </option>
        <option value="birthday">Birthday</option>
        <option value="wedding">Wedding</option>
        <option value="anniversary">Anniversary</option>
        <option value="graduation">Graduation</option>
        <option value="holidays">Holidays</option>
        <option value="other">Other</option>
      </select>
    </div>
  );
};

const categories = [
  { id: 1, name: "Electronics and Computers" },
  { id: 2, name: "Home and Kitchen" },
  { id: 3, name: "Furniture" },
  { id: 4, name: "Outdoor and Garden" },
  { id: 5, name: "Pet Supplies" },
  { id: 6, name: "Health and Wellness" },
  { id: 7, name: "Sports and Outdoor Gear" },
  { id: 8, name: "Jewelry and Accessories" },
  { id: 9, name: "Office Supplies" },
  { id: 10, name: "Others" },
];

//CategorySelectionForm
const CategorySelectionForm = () => {
  const [customCategory, setCustomCategory] = useState(""); // State for custom category text
  const [showCustomInput, setShowCustomInput] = useState(false); // State to toggle display of custom input

  // Handler for checkbox change
  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    if (name === "Others" && checked) {
      setShowCustomInput(true); // Show custom input if "Others" checkbox is checked
    } else {
      setShowCustomInput(false); // Hide custom input if any other checkbox is checked
    }
  };

  // Handler for custom category input change
  const handleCustomCategoryChange = (event) => {
    setCustomCategory(event.target.value);
  };

  // Handler for custom category form submission
  const handleSubmitCustomCategory = (event) => {
    event.preventDefault();
    // Handle submission of custom category (e.g., add it to state, perform any other action)
    console.log("Custom category submitted:", customCategory);
    // Clear the input field
    setCustomCategory("");
    // Hide the custom input field
    setShowCustomInput(false);
  };

  return (
    <div className="w-full max-w-md p-4 mx-auto">
      <label htmlFor="event-type" className="text-m font-semibold mb-3">
        Select Categories:
      </label>
      <form className="grid grid-cols-2 gap-2">
        {categories.map((category) => (
          <div key={category.id} className="flex items-center">
            <input
              type="checkbox"
              id={category.name}
              name={category.name}
              value={category.name}
              onChange={handleCheckboxChange}
              className="mr-2"
            />
            <label htmlFor={category.name} className="text-m">
              {category.name}
            </label>
          </div>
        ))}
        {showCustomInput && (
          <div className="flex items-center">
            <form onSubmit={handleSubmitCustomCategory}>
              <input
                type="text"
                value={customCategory}
                onChange={handleCustomCategoryChange}
                placeholder="Enter custom category"
                className={`max-w-md mr-2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 ${
                  showCustomInput ? "w-full" : ""
                }`}
              />
              <button
                type="submit"
                className="bg-orange-400 hover:bg-orange-600 text-white font-bold mt-2 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Submit
              </button>
            </form>
          </div>
        )}
      </form>
    </div>
  );
};

const PriceRangeInput = () => {
  const handlePriceRangeChange = (event) => {
    const selectedPriceRange = event.target.value;
    console.log(`Price range selected: ${selectedPriceRange}`);
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <label htmlFor="event-type" className="text-m font-semibold mb-3">
        Select a Price Range:
      </label>

      <div className="relative">
        <select
          className="block w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          onChange={handlePriceRangeChange}
        >
          <option value="">Select Price Range</option>
          <option value="0-10">$0 - $20</option>
          <option value="11-20">$20 - $40</option>
          <option value="21-30">$40 - $60</option>
          <option value="31-40">$60 - $80</option>
          <option value="41-50">$80 - $100</option>
          <option value="41-50">$100+</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          ></svg>
        </div>
      </div>
      <button className="mt-4 w-full bg-orange-400 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Generate Gift Ideas
      </button>
    </div>
  );
};

// RecipientForm.js

const RecipientForm = () => {
  const [recipientType, setRecipientType] = useState("");

  const handleRecipientChange = (e) => {
    setRecipientType(e.target.value);
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-m font-semibold mb-3">Recipient Type:</h1>
      <select
        className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        value={recipientType}
        onChange={handleRecipientChange}
      >
        <option value="">Select Recipient Type</option>
        <option value="Mother">Mother</option>
        <option value="Father">Father</option>
        <option value="Lover">Lover</option>
        <option value="Wife">Wife</option>
        <option value="Brother">Brother</option>
        <option value="Sister">Sister</option>
        <option value="Friend">Friend</option>
        <option value="Relatives">Relatives</option>
        {/* Add more options as needed */}
      </select>
    </div>
  );
};
const PerfectPresent = () => {
  return (
    <div className="flex">
      <div className=" min-h-screen flex justify-center items-center">
        <div className="max-w-2xl p-8 bg-white shadow-md rounded-md">
          <h1 className="text-3xl font-bold mb-4 text-center">
            Unleashing the Magic of AI to Craft Your Perfect Present
          </h1>
          <p className="text-gray-700 text-lg mb-6 text-center">
            Unlock the Art of Thoughtful Gifting at
            <a
              href="https://www.GiftGuru.co.in"
              className="text-blue-500 hover:underline"
            >
              {" "}
              GiftGuru.co.in!
            </a>
            Navigate our constellation of curated treasures and unveil the
            perfect gift with cosmic ease. Begin your journey today, where every
            click whispers a personalized surprise. 🎁 transform your shopping
            experience into a seamless and delightful adventure. Try our AI gift
            idea generator now and discover the joy of giving the perfect
            present, every time. 🎁✨
          </p>

          {/* <h1 className="text-3xl font-bold mb-4 text-center">
            How GiftGuru.co.in works
          </h1>
          <p className="text-gray-700 text-lg mb-6 text-center">
            Embark on a gifting journey like no other with GiftGuru.co.in, your
            personal AI-powered gift concierge. Our sophisticated platform
            harnesses the power of advanced machine learning and natural
            language processing to curate an array of gift options tailored to
            your unique preferences.
          </p>
          <p className="text-gray-700 text-lg mb-6 text-center">
            Simply input the age, gender, occasion, interests, product category,
            and budget for your intended recipient, and let our intelligent
            algorithms weave through the vast expanse of possibilities to
            present you with a bespoke selection of gift ideas. Our system is
            finely tuned to align with the recipient's interests and tastes,
            ensuring that each gift resonates with personal significance.🎁✨
          </p>
          <p className="text-gray-700 text-lg mb-6 text-center">
            Bid farewell to the endless search for the ideal gift. Embrace the
            future of gifting with GiftGuru.co.in and transform your shopping
            experience into a seamless and delightful adventure. 🎁✨
          </p> */}
        </div>
      </div>
    </div>
  );
};

export {
  GenderInputForm,
  AgeRangeForm,
  EventTypeInputForm,
  CategorySelectionForm,
  PriceRangeInput,
  RecipientForm,
};

export { PerfectPresent };
