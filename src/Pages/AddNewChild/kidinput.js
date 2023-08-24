import React, { useState } from 'react';


function KidInput() {
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
        placeholder="Name"
        style={{
          position: 'absolute',
          top: '10px',  // Adjust these as necessary
          width: '312px',
          height: '36px',
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
      ></textarea>
      <textarea
        placeholder="Age"
        style={{
          position: 'absolute',
          top: '80px',  // Adjust these as necessary
          width: '312px',
          height: '36px',
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
      ></textarea>
      <textarea
        placeholder="Describe the child. What do they like? Do they have any allergies?"
        style={{
          position: 'absolute',
          top: '150px',  // Adjust these as necessary
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
      ></textarea>
    </div>
  );
}

export default KidInput;
