import React, { useState } from 'react';
import { Combobox } from 'baseui/combobox';
import NextButton from '../../Components/MockScreenshot/NextButton/NextButton';
import { useNavigate } from "react-router-dom";

// Random imports from Base UI
import { Button } from "baseui/button";
import {
    ProgressSteps,
    Step
} from "baseui/progress-steps";
import MockScreenshot from '../../Components/MockScreenshot/MockScreenshot.js';
import Image from './childdetails_2.png'; // another image is defined here using file path

function ChildDetails2() {
  let navigate = useNavigate();
  return (
    <div style={{ position: 'relative', width: '375px', height: '812px', backgroundImage: `url(${Image})`, backgroundSize: 'cover' }}>
            <Button onClick={() => { navigate(`/ChildDetails`) }} className='activity-bottom'
            style={{
                width: '340px',
                height: '30px',
                position: 'absolute',
                top: '27%', /* Adjust the top value as needed */
                left: '5%', /* Adjust the left value as needed */
                backgroundColor: 'blue', // Set your desired background color
                opacity: '0%'
            }}>
                {/*make sure navigate param matches path defined in App.js*/}
            </Button>   
            
            <Button onClick={() => { navigate(`/ChildDetails3`) }} className='activity-bottom'
            style={{
                width: '340px',
                height: '30px',
                position: 'absolute',
                top: '38%', /* Adjust the top value as needed */
                left: '5%', /* Adjust the left value as needed */
                backgroundColor: 'blue', // Set your desired background color
                opacity: '0%'
            }}>
                {/*make sure navigate param matches path defined in App.js*/}
            </Button>   
    </div>
  );
}

export default ChildDetails2;