import React from 'react';
import screenshot from './addnewkid.png';  // Change the path to your actual screenshot path
import NextButton from '../../Components/MockScreenshot/NextButton/NextButton';
import { useNavigate } from "react-router-dom";
import KidInput from './kidinput';

function AddNewChild() {
    const navigate = useNavigate();
    const handleNextClick = () => {
        navigate("/home");
    }

  return (
    <div style={{ position: 'relative', width: '375px', height: '812px', backgroundImage: `url(${screenshot})`, backgroundSize: 'cover' }}>
      
      <div style={{ position: 'absolute', top: '23%', left: '4%' }}>
        <KidInput  />
      </div>
      <NextButton onClick={handleNextClick} />
    </div>
  );
}

export default AddNewChild;
