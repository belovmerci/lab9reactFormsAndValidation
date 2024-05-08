import React, { useState } from 'react';

const CitySelector = () => {
  const [selectedCity, setSelectedCity] = useState('');

  const handleChange = (e) => {
    setSelectedCity(e.target.value);
  };

  return (
    <div>
      <select value={selectedCity} onChange={handleChange}>
        <option value="">Select a city</option>
        <option value="Rio">Rio de Janeiro</option>
        <option value="Other">Other</option>
      </select>
      {selectedCity !== 'Rio' && <p>No, this is not Rio de Janeiro!</p>}
    </div>
  );
};

export default CitySelector;