import React from 'react';
import screenshot from './home_details.png';  // Change the path to your actual screenshot path
import NextButton from '../../Components/MockScreenshot/NextButton/NextButton';
import { useNavigate } from "react-router-dom";
import HomeInput from './homeinput';

function DescribeHome({setHouseDesc}) {
    const navigate = useNavigate();
    const handleNextClick = () => {
        navigate("/childdetails");
    }

  return (
    <div style={{ position: 'relative', width: '375px', height: '812px', backgroundImage: `url(${screenshot})`, backgroundSize: 'cover' }}>
      
      <div style={{ position: 'absolute', top: '23%', left: '4%' }}>
        <HomeInput  setHouseDesc={setHouseDesc}/>
      </div>
      <NextButton onClick={handleNextClick} />
    </div>
  );
}

export default DescribeHome;
