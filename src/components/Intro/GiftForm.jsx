import React, { useState } from "react";
import axios from 'axios';

const GiftForm = () => {
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [occasion, setOccasion] = useState('');
  const [recipientType, setRecipientType] = useState('');
  const [giftIdeas, setGiftIdeas] = useState([]);
  const [error, setError] = useState('');

  const generateGiftIdeas = async () => {
    try {
      const response = await axios.post('http://localhost:5000/generate_gift_idea', {
        age,
        gender,
        occasion,
        recipient_type: recipientType,
      });
      setGiftIdeas(response.data.gift_ideas);
    } catch (error) {
      setError('Error generating gift ideas');
    }
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleOccasionChange = (event) => {
    setOccasion(event.target.value);
  };

  const handleRecipientChange = (event) => {
    setRecipientType(event.target.value);
  };

  return (
    <div>
      <h1>Gift Guru</h1>
      <div className="max-w-md mx-auto p-4">
        <label htmlFor="age" className="text-m font-semibold mb-3 open-sans-regular">
          Age Range:
        </label>
        <select
          id="age"
          name="age"
          className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          value={age}
          onChange={handleAgeChange}
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

      <div className="max-w-md mx-auto p-4">
        <label htmlFor="gender" className="text-m font-semibold mb-3 open-sans-regular">
          Select Gender:
        </label>
        <select
          id="gender"
          name="gender"
          className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          value={gender}
          onChange={handleGenderChange}
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="max-w-md mx-auto p-4">
        <label htmlFor="occasion" className="text-m font-semibold mb-3 open-sans-regular">
          Select Occasion:
        </label>
        <select
          id="occasion"
          name="occasion"
          className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          value={occasion}
          onChange={handleOccasionChange}
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

      <div className="max-w-md mx-auto p-4">
        <label htmlFor="recipient" className="text-m font-semibold mb-3 open-sans-regular">
          Recipient Type:
        </label>
        <select
          id="recipient"
          name="recipient"
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

      <div className="max-w-md mx-auto p-4">
        <button
          className="mt-4 w-full bg-orange-400 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={generateGiftIdeas}
        >
          Generate Gift Ideas
        </button>
        {error && <p>{error}</p>}
        <ul>
          {giftIdeas.map((idea, index) => (
            <li key={index}>{idea}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default GiftForm;
