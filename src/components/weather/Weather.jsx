import React, { useEffect, useState } from 'react';

function Weather() {
  const [weather, setWeather] = useState('');

  useEffect(() => {
    // Make a GET request to your Express.js server
    fetch('http://localhost:5173') // Make sure to replace with the correct URL
      .then((response) => response.text())
      .then((data) => setWeather(data))
      .catch((error) => console.error('Error:', error));
  }, []);

  return (
    <div>
      <h1>Weather Information</h1>
      <p>{weather}</p>
    </div>
  );
}

export default Weather;
