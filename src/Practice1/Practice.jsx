import { useState } from 'react';

const Practice = () => {
  const [isRed, setIsRed] = useState(true);

  const handleClick = (e) => {
    e.preventDefault();
    setIsRed(!isRed);
  };


  return (
    <div>
      <button style={{backgroundColor:isRed? "red": "green"}} onClick={handleClick}>
        Submit
      </button>
    </div>
  );
};

export default Practice;
