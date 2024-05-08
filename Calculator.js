import React, { useState } from 'react';

const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operator, setOperator] = useState('');
  const [result, setResult] = useState('');

  const calculateResult = () => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    let res;
    switch (operator) {
      case '+':
        res = n1 + n2;
        break;
      case '-':
        res = n1 - n2;
        break;
      case '*':
        res = n1 * n2;
        break;
      case '/':
        res = n1 / n2;
        break;
      default:
        res = '';
    }
    setResult(res);
  };

  return (
    <div>
      <input type="number" value={num1} onChange={(e) => setNum1(e.target.value)} />
      <select value={operator} onChange={(e) => setOperator(e.target.value)}>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      <input type="number" value={num2} onChange={(e) => setNum2(e.target.value)} />
      <button onClick={calculateResult}>=</button>
      <span>{result && `${num1} ${operator} ${num2} = ${result}`}</span>
    </div>
  );
};

export default Calculator;
