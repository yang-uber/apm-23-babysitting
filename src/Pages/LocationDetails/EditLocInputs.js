import React, { useState } from 'react';


function LocInputs({address}) {
  const [inputValue, setInputValue] = useState(""); // To keep track of input value

  

  return (
    
    <div style={{
      display: 'flex',
      width: '160px',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: '8px',
    }}>
    <label 
        style={{
            position: "absolute",
            top:"-50px",
          color: 'var(--content-content-primary, #000)',
          fontFamily: 'Uber Move Text, sans-serif',
          fontSize: '18px',
          fontStyle: 'normal',
          fontWeight: 500,
          lineHeight: '24px'
        }}
        htmlFor="numericTextarea"
      >
        {`${address}`}
      </label>
    <textarea
        placeholder="Apt / Suite / Floor"
        style={{
          position: 'absolute',
          top: '-15px',  // Adjust these as necessary
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
        placeholder="Business / Building Name"
        style={{
          position: 'absolute',
          top: '50px',  // Adjust these as necessary
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
        placeholder="Add instructions to help your babysitter find parking, etc."
        style={{
          position: 'absolute',
          top: '185px',  // Adjust these as necessary
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

export default LocInputs;
