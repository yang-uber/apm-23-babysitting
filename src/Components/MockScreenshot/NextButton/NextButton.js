// NextButton.js
import React from 'react';

function NextButton({ onClick }) {
  return (
    <button 
        onClick={onClick}
        style={{
            backgroundColor: 'transparent',
            color: 'Pink',
            padding: '12px 24px',
            borderRadius: '8px',
            border: 'none',
            width:'75%',
            height: '50px',
            cursor: 'pointer',
            fontFamily: 'Uber Move, sans-serif',
            position: 'absolute',  // To position at the bottom
            bottom: '35px',       // Small offset from the bottom
            left: '50%',          // Center horizontally
            transform: 'translateX(-50%)' // Adjust for the button width
        }}
    >
    </button>
  );
}

export default NextButton;
