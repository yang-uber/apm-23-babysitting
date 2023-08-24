import React, { useState } from 'react';


function SetDateTime({ address }) {
  const [inputValue, setInputValue] = useState(""); // To keep track of input value

  

  return (
    <div style={{
      display: 'flex',
      width: '160px',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: '8px',
    }}>
      <input 
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)} // Update the input value when user types
        placeholder="00:00 AM" // This will be the grayed-out placeholder text
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '12px 22px',
          width: '100%',
          textAlign: 'center',
          backgroundColor: 'rgba(232, 232, 232, 1)',
          borderRadius: '8px',
          border: 'none',
          color: 'gray',
          fontFamily: 'Uber Move, sans-serif',
        }}
      />
    </div>
  );
}

export default SetDateTime;
