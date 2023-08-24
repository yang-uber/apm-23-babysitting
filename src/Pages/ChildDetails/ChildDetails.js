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
  const [childCount, setChildCount] = useState('');
  const [childNames, setChildNames] = useState([]);

  const handleChildCountChange = ({ value }) => {
    setChildCount(value);
    setChildNames(Array(Number(value)).fill(''));
  };

  const handleNameChange = (index, name) => {
    const updatedNames = [...childNames];
    updatedNames[index] = name;
    setChildNames(updatedNames);
  };

  const nameOptions = [
    { label: 'Dominic' },
    { label: 'Yang' },
    { label: 'Add New' },
  ];

  return (
    <div style={{ position: 'relative', width: '375px', height: '812px', backgroundImage: `url(${Image})`, backgroundSize: 'cover' }}>
      <h1>Child Selection</h1>
      <Combobox
        value={childCount}
        onChange={answer => setChildCount(answer)}
        options={[
            { label: "1"},
            { label: "2"},
            { label: "3"},
        ]}
        mapOptionToString={option => option.label}
    />
    </div>
  );
}

export default ParticipantDetails;