import React from 'react';
import screenshot from './selectdatetime.png';  // Change the path to your actual screenshot path
import TimeButton from './selecttimebutton.js';
import NextButton from '../../Components/MockScreenshot/NextButton/NextButton';
import { Select } from 'baseui/select';
import { useNavigate } from "react-router-dom";

function SelectDateTime({ address }) {
    const navigate = useNavigate();
    const handleNextClick = () => {
        navigate("/describeHome");
    }

  return (
    <div style={{ position: 'relative', width: '375px', height: '812px', backgroundImage: `url(${screenshot})`, backgroundSize: 'cover' }}>

        <div style={{position: 'absolute', top:'31%', left:'4%'}}>
        {address && <div style={{ textAlign: 'left', color: 'black' }}>{`Set Time at ${address}`}</div>}
        </div>
      
      <div style={{ position: 'absolute', top: '40%', left: '4%' }}>
        <TimeButton address={address} />
      </div>

      <div style={{ position: 'absolute', top: '56%', left: '4%' }}>
        <TimeButton />
      </div>
      <NextButton onClick={handleNextClick} />
    </div>
  );
}

export default SelectDateTime;
