import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";


function FindLocation({address, setAddress}) {
  const navigate = useNavigate();

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      setAddress(e.target.value);
      e.preventDefault(); // Prevents the default action (newline) when Enter is pressed
      navigate(`/locationDetails`)

    }
  };

  

  return (
    
    <div style={{
      display: 'flex',
      width: '130px',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: '8px',
      position: 'relative',  // Added to contain the absolute positioning of the children,
      top:'135px',
    }}>
      <svg
        width="16"
        height="16"
        style={{
          position: 'absolute',
          top: '50%',
          left: '12px',
          transform: 'translateY(-50%)',
          zIndex: 2,
        }}
      >
        {/* Replace below with your actual SVG path or another icon */}
        <circle cx="7" cy="7" r="6" stroke="black" strokeWidth="1" fill="none" />
        <line x1="11" y1="11" x2="15" y2="15" stroke="black" strokeWidth="1" />
      </svg>
      <textarea
        placeholder="Search"
        onKeyDown={handleKeyDown}
        style={{
          position: 'relative',  // Changed to relative so it stacks normally in the flex container
          top: '0',
          width: '300px',
          height: '36px',
          borderRadius: '8px',
          padding: '12px 16px 12px 36px',  // Increase left padding to accommodate the SVG
          lineHeight: '38px',
          fontFamily: 'Uber Move, sans-serif',
          fontSize: '16px',
          backgroundColor: 'rgba(232, 232, 232, 1)',
          border: 'none',
          whiteSpace: 'pre-wrap',
          wordWrap: 'break-word',
          resize: 'none',
          '::-webkit-scrollbar': {
            display: 'none',
            width: '0px'  // For Windows high-contrast mode
          },
          overflow:'hidden',
        }}
      ></textarea>
</div>

  );
}

export default FindLocation;
