import React, { useState } from "react";

const GenderInputForm = () => {
  const [selectedGender, setSelectedGender] = useState("");

  const handleGenderChange = (event) => {
    const gender = event.target.value;
    setSelectedGender(gender);
    console.log(`Gender selected: ${gender}`);
  };

  return (
    <div>
      <div className="max-w-md mx-auto p-4">
        <label htmlFor="gender" className="text-m font-semibold mb-3 open-sans-regular">
          Select Gender:
        </label>
        <select
          id="gender"
          name="gender"
          className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          value={selectedGender}
          onChange={handleGenderChange}
        >
          <option disabled value="">
            Select Gender
          </option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
    </div>
  );
};

class AgeRangeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: "1-10",
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
        <label htmlFor="age-range" className="text-m font-semibold mb-3 open-sans-regular">
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
          <option value="10-18">10-18</option>
          <option value="18-25">18-25</option>
          <option value="25-40">25-40</option>
          <option value="40-60">40-60</option>
          <option value="60+">60+</option>
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
      <label htmlFor="event-type" className="text-m font-semibold mb-3 open-sans-regular">
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
  { id: 1, name: "Electronics" },
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

const CategorySelectionForm = () => {
  const [customCategory, setCustomCategory] = useState("");
  const [showCustomInput, setShowCustomInput] = useState(false);

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    if (name === "Others" && checked) {
      setShowCustomInput(true);
    } else {
      setShowCustomInput(false);
    }
  };

  const handleCustomCategoryChange = (event) => {
    setCustomCategory(event.target.value);
  };

  const handleSubmitCustomCategory = (event) => {
    event.preventDefault();
    console.log("Custom category submitted:", customCategory);
    setCustomCategory("");
    setShowCustomInput(false);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <label htmlFor="event-type" className="text-m font-semibold mb-3 open-sans-regular">
        Select Categories:
      </label>
      <form className="grid grid-cols-2 gap-2 open-sans-regular">
        {categories.map((category) => (
          <div key={category.id} className="flex items-center open-sans-regular">
            <input
              type="checkbox"
              id={category.name}
              name={category.name}
              value={category.name}
              onChange={handleCheckboxChange}
              className="mr-2"
            />
            <label htmlFor={category.name} className="text-m open-sans-regular">
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
      <label htmlFor="event-type" className="text-m font-semibold mb-3 open-sans-regular">
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
          <option value="100+">$100+</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          ></svg>
        </div>
      </div>
    </div>
  );
};

const Button = ({ onClick }) => {
  return (
    <button
      className="mt-4 w-full bg-orange-400 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      onClick={onClick}
    >
      Generate Gift Ideas
    </button>
  );
};

const RecipientForm = () => {
  const [recipient, setRecipient] = useState("");

  const handleRecipientChange = (event) => {
    setRecipient(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Recipient:", recipient);
    setRecipient("");
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <label htmlFor="recipient" className="text-m font-semibold mb-3 open-sans-regular">
        Enter the Recipient Name:
      </label>
      <input
        id="recipient"
        name="recipient"
        type="text"
        value={recipient}
        onChange={handleRecipientChange}
        className="block w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-indigo-500"
      />
      <button
        type="submit"
        className="mt-4 w-full bg-orange-400 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
};

export {
  GenderInputForm,
  AgeRangeForm,
  EventTypeInputForm,
  CategorySelectionForm,
  PriceRangeInput,
  Button,
  RecipientForm,
};
