import React from 'react';
import screenshot from './locationSelect.png';  // Change the path to your actual screenshot path
import NextButton from '../../Components/MockScreenshot/NextButton/NextButton';
import { useNavigate } from "react-router-dom";
import FindLocation from './FindLocation.js';

function LocationSelect({address, setAddress}) {
    const navigate = useNavigate();
    const handleNextClick = () => {
        navigate("/locationDetails");
    }

  return (
    <div style={{ position: 'relative', width: '375px', height: '812px', backgroundImage: `url(${screenshot})`, backgroundSize: 'cover' }}>
      
      <div style={{ position: 'absolute', top: '23%', left: '4%' }}>
        <FindLocation address={address} setAddress={setAddress} />
      </div>
      <NextButton onClick={handleNextClick} />
    </div>
  );
}

export default LocationSelect;
