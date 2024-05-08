import React, { useState } from 'react';

const NumberList = () => {
  const [inputValue, setInputValue] = useState('');
  const [numbers, setNumbers] = useState([]);
  const [filter, setFilter] = useState('all');

  const addNumber = () => {
    if (inputValue.trim() !== '') {
      setNumbers([...numbers, parseInt(inputValue)]);
      setInputValue('');
    }
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredNumbers = () => {
    switch (filter) {
      case 'even':
        return numbers.filter((number) => number % 2 === 0);
      case 'odd':
        return numbers.filter((number) => number % 2 !== 0);
      default:
        return numbers;
    }
  };

  return (
    <div>
      <input type="number" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <button onClick={addNumber}>+</button>
      <select value={filter} onChange={handleFilterChange}>
        <option value="all">Все</option>
        <option value="even">Чётные</option>
        <option value="odd">Нечётные</option>
      </select>
      <ul>
        {filteredNumbers().map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>
    </div>
  );
};

export default NumberList;
