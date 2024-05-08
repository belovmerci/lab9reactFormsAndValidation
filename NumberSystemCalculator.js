import React, { useState } from 'react';

const NumberSystemCalculator = () => {
  const [number, setNumber] = useState('');
  const [base, setBase] = useState('');
  const [result, setResult] = useState('');

  const convertNumber = () => {
    const decimalNumber = parseInt(number, base);
    setResult(decimalNumber);
  };

  return (
    <div>
      <input type="text" value={number} onChange={(e) => setNumber(e.target.value)} />
      <select value={base} onChange={(e) => setBase(e.target.value)}>
        <option value="2">Binary</option>
        <option value="8">Octal</option>
        <option value="10">Decimal</option>
        <option value="16">Hexadecimal</option>
      </select>
      <button onClick={convertNumber}>Convert</button>
      <span>{result && `${number} in base ${base} = ${result} in decimal`}</span>
    </div>
  );
};

export default NumberSystemCalculator;
