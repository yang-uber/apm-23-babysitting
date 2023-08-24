import React from 'react';
import screenshot from './addnewkid.png';  // Change the path to your actual screenshot path
import NextButton from '../../Components/MockScreenshot/NextButton/NextButton';
import { useNavigate } from "react-router-dom";
import KidInput from './kidinput';
import { Button } from "baseui/button";

function AddNewChild() {
    const navigate = useNavigate();
    const handleNextClick = () => {
        navigate("/home");
    }

  return (
    <div style={{ position: 'relative', width: '375px', height: '812px', backgroundImage: `url(${screenshot})`, backgroundSize: 'cover' }}>
        <Button onClick={() => { navigate(`/childdetails`) }} className='back-button'
                style={{
                    width: '50px',
                    height: '50px',
                    position: 'absolute',
                    top: '5%', /* Adjust the top value as needed */
                    left: '2%', /* Adjust the left value as needed */
                    backgroundColor: 'blue', // Set your desired background color
                    opacity: '0%'
                }}></Button>
      
      <div style={{ position: 'absolute', top: '23%', left: '4%' }}>
        <KidInput  />
      </div>
      <NextButton onClick={handleNextClick} />
    </div>
  );
}

export default AddNewChild;
