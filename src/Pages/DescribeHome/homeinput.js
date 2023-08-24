import React, { useState } from 'react';


function HomeInput({setHouseDesc}) {
  const [inputValue, setInputValue] = useState(""); // To keep track of input value

  

  return (
    <div style={{
      display: 'flex',
      width: '160px',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: '8px',
    }}>
    <textarea
        placeholder="Give details to help your babysitter 
        know what to expect for your home during the job. 
        Helpful information could include how to use relevant 
        home appliances."
        style={{
          position: 'absolute',
          top: '15%',  // Adjust these as necessary
          width: '312px',
          height: '212px',
          borderRadius: '8px',
          padding: '12px 16px',
          fontFamily: 'Uber Move, sans-serif',
          fontSize: '16px',
          backgroundColor: 'rgba(232, 232, 232, 1)', // Slight opacity
          border: 'none',
          whiteSpace: 'pre-wrap',
          wordWrap: 'break-word',
          resize: 'none' // Disable user resizing
        }}
        onChange={(e) => {
          setInputValue(e.target.value);
          setHouseDesc(e.target.value);
        }}
      ></textarea>
    </div>
  );
}

export default HomeInput;
