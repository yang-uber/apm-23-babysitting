import React, { useState } from 'react';
import { Combobox } from 'baseui/combobox';
import NextButton from '../../Components/MockScreenshot/NextButton/NextButton';
import { useNavigate } from "react-router-dom";

// Random imports from Base UI
import { Button } from "baseui/button";
import './childdetails_3.css'
import {
    ProgressSteps,
    Step
} from "baseui/progress-steps";
import MockScreenshot from '../../Components/MockScreenshot/MockScreenshot.js';
import Image from './childdetails_3.png'; // another image is defined here using file path

function ChildDetails3() {
  const navigate = useNavigate();

  const [childNames1, setChildNames1] = useState([]);
  const [childNames2, setChildNames2] = useState([]);
  const [childNames3, setChildNames3] = useState([]);

  const handleChildNameChange = (index, namesSetter) => ({ value }) => {
    const updatedNames = [...namesSetter];
    updatedNames[index] = value;
    namesSetter(updatedNames);
  };

  const nameOptions = [
    { label: 'Dominic' },
    { label: 'Yang' },
    { label: 'Add New' },
  ];

  return (
    <div style={{ position: 'relative', width: '375px', height: '812px', backgroundImage: `url(${Image})`, backgroundSize: 'cover' }} className='ChildDetails_3 page'>
      <div className='formatting-container'>
        <div className="combobox-container">
          <h3>Child 1:</h3>
          <Combobox
            value={childNames1[0] || ''}
            onChange={handleChildNameChange(0, childNames => setChildNames1(childNames))}
            options={nameOptions}
            mapOptionToString={option => option.label}
          />
        </div>
        <div className="combobox-container">
          <h3>Child 2:</h3>
          <Combobox
            value={childNames2[0] || ''}
            onChange={handleChildNameChange(0, childNames => setChildNames2(childNames))}
            options={nameOptions}
            mapOptionToString={option => option.label}
          />
        </div>
        <div className="combobox-container">
          <h3>Child 3:</h3>
          <Combobox
            value={childNames3[0] || ''}
            onChange={handleChildNameChange(0, childNames => setChildNames3(childNames))}
            options={nameOptions}
            mapOptionToString={option => option.label}
          />
        </div>
      </div>
      <Button onClick={() => { navigate(`/addkid`) }} className='new-screen'
            style={{
          width: '350px',
          height: '50px',
          position: 'absolute',
          top: '91%', /* Adjust the top value as needed */
          left: '4%', /* Adjust the left value as needed */
          backgroundColor: 'blue', // Set your desired background color
          opacity: '0%'
      }}>
          {/*make sure navigate param matches path defined in App.js*/}
      </Button>  
    </div>
  );
}

export default ChildDetails3;