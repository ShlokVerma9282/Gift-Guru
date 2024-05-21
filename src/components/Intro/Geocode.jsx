import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Geocode = () => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState('');
  const [malls, setMalls] = useState([]);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ lat: latitude, lon: longitude });
          fetchMalls(latitude, longitude);
        },
        (error) => {
          console.error('Error getting location:', error);
          setError('Error getting location. Please try again.');
        }
      );
    } else {
      console.error('Geolocation not supported');
      setError('Geolocation not supported');
    }
  }, []);

  const fetchMalls = async (lat, lon) => {
    try {
      const query = `
        [out:json];
        (
          node["shop"="mall"](around:5000,${lat},${lon});
          way["shop"="mall"](around:5000,${lat},${lon});
          relation["shop"="mall"](around:5000,${lat},${lon});
        );
        out center;
      `;
      const response = await axios.post('https://overpass-api.de/api/interpreter', `data=${encodeURIComponent(query)}`);
      
      const uniqueMalls = getUniqueMalls(response.data.elements);
      setMalls(uniqueMalls.slice(0, 4)); // Limit to 4 unique elements
    } catch (error) {
      console.error('Failed to fetch malls:', error);
      setError('Failed to fetch malls. Please try again.');
    }
  };

  const getUniqueMalls = (malls) => {
    const seenNames = new Set();
    const seenLocations = new Set();
    const uniqueMalls = [];

    for (const mall of malls) {
      const name = mall.tags.name;
      const locationKey = `${mall.lat},${mall.lon}`;
      
      if (
        name && /^[A-Za-z\s]+$/.test(name) && // Check if name is in English
        !seenNames.has(name) && 
        !seenLocations.has(locationKey)
      ) {
        seenNames.add(name);
        seenLocations.add(locationKey);
        uniqueMalls.push(mall);
      }
    }

    return uniqueMalls;
  };

  const getGoogleMapsLink = (lat, lon) => {
    return `https://www.google.com/maps/search/?api=1&query=${lat},${lon}`;
  };

  return (
    <div className="container mt-5">
      <h1>Find Malls Near You</h1>
      {error && <p className="text-danger">{error}</p>}
      {location && (
        <div className="mt-3">
          <h3>Coordinates:</h3>
          <p>Latitude: {location.lat}</p>
          <p>Longitude: {location.lon}</p>
          {malls.length > 0 && (
            <div>
              <h3>Malls Near You:</h3>
              <div className="mall-box-container">
                {malls.map(mall => (
                  <div key={mall.id} className="mall-box">
                    <p>{mall.tags.name}</p>
                    <a href={getGoogleMapsLink(mall.lat, mall.lon)} target="_blank" rel="noopener noreferrer">
                      View on Google Maps
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
      <style jsx>{`
        .mall-box-container {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }
        .mall-box {
          border: 1px solid #ccc;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.1);
          text-align: center;
        }
        .mall-box p {
          margin: 0 0 10px;
          font-weight: bold;
        }
        .mall-box a {
          color: #007bff;
          text-decoration: none;
        }
        .mall-box a:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
};

export default Geocode;
