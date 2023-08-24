import React from 'react';
import screenshot from './edit_location.png';  // Change the path to your actual screenshot path
import NextButton from '../../Components/MockScreenshot/NextButton/NextButton';
import { useNavigate } from "react-router-dom";
import LocInputs from './EditLocInputs.js';

function LocationDetails({address, setAddress2}) {
    const navigate = useNavigate();
    const handleNextClick = () => {
        navigate("/describeHome");
    }

  return (
    <div style={{ position: 'relative', width: '375px', height: '812px', backgroundImage: `url(${screenshot})`, backgroundSize: 'cover' }}>
      
      <div style={{ position: 'absolute', top: '23%', left: '4%' }}>
        <LocInputs address={address} setAddress={setAddress2}/>
      </div>
      <NextButton onClick={handleNextClick} />
    </div>
  );
}

export default LocationDetails;
