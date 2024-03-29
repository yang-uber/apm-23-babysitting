import React, { useState } from 'react';
import StepperCounter from './StepperCounter';
import { Combobox } from 'baseui/combobox';
import screenshot from './childdetails.png';  // Change the path to your actual screenshot path
import NextButton from '../../Components/MockScreenshot/NextButton/NextButton';
import { useNavigate } from "react-router-dom";

// Random imports from Base UI
import { Button } from "baseui/button";
import {
    ProgressSteps,
    Step
} from "baseui/progress-steps";
import MockScreenshot from '../../Components/MockScreenshot/MockScreenshot.js';
import Image from './childdetails.png'; // another image is defined here using file path
import './childdetails.css';

function ParticipantDetails() {
  let navigate = useNavigate();
  return (
    <div style={{ position: 'relative', width: '375px', height: '812px', backgroundImage: `url(${Image})`, backgroundSize: 'cover' }}>
            <Button onClick={() => { navigate(`/ChildDetails2`) }} className='activity-bottom' // CHANGE
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
    </div>
  );
}

export default ParticipantDetails;