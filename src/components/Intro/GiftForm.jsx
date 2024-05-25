import React, { useState } from "react";
import axios from "axios";

const GiftForm = ({ onGenerateGiftIdeas, onFormDataChange }) => {
  const [formData, setFormData] = useState({
    age: "",
    gender: "",
    occasion: "",
    recipientType: "",
    priceRange: "",
    categories: [],
    prompt: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
    onFormDataChange({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    const updatedCategories = checked
      ? [...formData.categories, name]
      : formData.categories.filter((category) => category !== name);
    setFormData((prevData) => ({
      ...prevData,
      categories: updatedCategories
    }));
    onFormDataChange({ ...formData, categories: updatedCategories });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await generateGiftIdeas();
  };

  const generateGiftIdeas = async () => {
    try {
      const response = await axios.post("http://localhost:5000/generate_gift_idea", formData);
      onGenerateGiftIdeas(response.data.gift_ideas, "");
    } catch (error) {
      onGenerateGiftIdeas([], "Error generating gift ideas");
    }
  };

  return (
    <div className="m-4">
      <h1 className="text-xl font-bold mb-4">Gift Guru</h1>
      <form onSubmit={handleSubmit}>
        {/* Form fields */}
        <div className="mb-4">
          <label htmlFor="age" className="text-m font-semibold mb-3 block open-sans-regular">
            Age Range:
          </label>
          <select
            id="age"
            name="age"
            className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-400 focus:border-orange-400"
            value={formData.age}
            onChange={handleChange}
            required
          >
            <option value="">Select Age</option>
            <option value="1-10">1-10</option>
            <option value="10-18">10-18</option>
            <option value="18-25">18-25</option>
            <option value="25-40">25-40</option>
            <option value="40-60">40-60</option>
            <option value="60+">60+</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="gender" className="text-m font-semibold mb-3 block open-sans-regular">
            Gender:
          </label>
          <select
            id="gender"
            name="gender"
            className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-400 focus:border-orange-400"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="occasion" className="text-m font-semibold mb-3 block open-sans-regular">
            Occasion:
          </label>
          <select
            id="occasion"
            name="occasion"
            className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-400 focus:border-orange-400"
            value={formData.occasion}
            onChange={handleChange}
            required
          >
            <option value="">Select Occasion</option>
            <option value="birthday">Birthday</option>
            <option value="wedding">Wedding</option>
            <option value="anniversary">Anniversary</option>
            <option value="graduation">Graduation</option>
            <option value="holidays">Holidays</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="recipientType" className="text-m font-semibold mb-3 block open-sans-regular">
            Recipient Type:
          </label>
          <select
            id="recipientType"
            name="recipientType"
            className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-400 focus:border-orange-400"
            value={formData.recipientType}
            onChange={handleChange}
            required
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
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="priceRange" className="text-m font-semibold mb-3 block open-sans-regular">
            Price Range:
          </label>
          <select
            id="priceRange"
            name="priceRange"
            className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-400 focus:border-orange-400"
            value={formData.priceRange}
            onChange={handleChange}
            required
          >
            <option value="">Select Price Range</option>
            <option value="0-20">$0 - $20</option>
            <option value="21-50">$21 - $50</option>
            <option value="51-100">$51 - $100</option>
            <option value="101-200">$101 - $200</option>
            <option value="201-500">$201 - $500</option>
            <option value="501-1000">$501 - $1000</option>
            <option value="1000+">$1000+</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="categories" className="text-m font-semibold mb-3 block open-sans-regular">
            Categories:
          </label>
          <div id="categories" className="block">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="electronics"
                onChange={handleCheckboxChange}
                className="form-checkbox h-5 w-5 text-orange-500 transition duration-150 ease-in-out"
              />
              <span className="ml-2">Electronics</span>
            </label>
            <label className="inline-flex items-center ml-4">
              <input
                type="checkbox"
                name="fashion"
                onChange={handleCheckboxChange}
                className="form-checkbox h-5 w-5 text-orange-500 transition duration-150 ease-in-out"
              />
              <span className="ml-2">Fashion</span>
            </label>
            <label className="inline-flex items-center ml-4">
              <input
                type="checkbox"
                name="home"
                onChange={handleCheckboxChange}
                className="form-checkbox h-5 w-5 text-orange-500 transition duration-150 ease-in-out"
              />
              <span className="ml-2">Home</span>
            </label>
            <label className="inline-flex items-center ml-4">
              <input
                type="checkbox"
                name="books"
                onChange={handleCheckboxChange}
                className="form-checkbox h-5 w-5 text-orange-500 transition duration-150 ease-in-out"
              />
              <span className="ml-2">Books</span>
            </label>
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="prompt" className="text-m font-semibold mb-3 block open-sans-regular">
            Prompt:
          </label>
          <textarea
            id="prompt"
            name="prompt"
            className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-400 focus:border-orange-400"
            value={formData.prompt}
            onChange={handleChange}
          />
        </div>
        <div className="flex justify-between">
          <button
            type="submit"
            className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={generateGiftIdeas}
            className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600"
          >
            Generate More
          </button>
        </div>
      </form>
    </div>
  );
};

export default GiftForm;
