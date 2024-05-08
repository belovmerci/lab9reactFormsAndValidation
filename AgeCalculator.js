import React, { useState, useEffect } from 'react';

const AgeCalculator = () => {
  const [birthDate, setBirthDate] = useState('');
  const [secondsLived, setSecondsLived] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const birthTime = new Date(birthDate).getTime();
      const currentTime = Date.now();
      const seconds = Math.floor((currentTime - birthTime) / 1000);
      setSecondsLived(seconds);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [birthDate]);

  return (
    <div>
      <input type="date" value={birthDate} onChange={(e) => setBirthDate(e.target.value)} />
      <p>You have lived: {secondsLived} seconds</p>
    </div>
  );
};

export default AgeCalculator;
