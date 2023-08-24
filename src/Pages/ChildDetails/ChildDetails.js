import React, { useState } from 'react';
import StepperCounter from './StepperCounter';
import screenshot from './childdetails.png';  // Change the path to your actual screenshot path
import NextButton from '../../Components/MockScreenshot/NextButton/NextButton';
import { useNavigate } from "react-router-dom";

function ParticipantDetails() {
    const navigate = useNavigate();
  const [participantCount, setParticipantCount] = useState(0);

  const dropdownOptions = ["Yang", "Dominic", "Create new"];

  return (
    <div style={{ position: 'relative', width: '375px', height: '812px', backgroundImage: `url(${screenshot})`, backgroundSize: 'cover' }}>

        <div style={{position: 'absolute', top: '26%', left: '38%'}}>
      <StepperCounter onCountChange={setParticipantCount}/>
      </div>

      {Array.from({ length: participantCount }).map((_, index) => (
        <select key={index} style={{ 
            display: 'block', 
            marginTop: '8px', 
            display: 'flex',
            padding: "8px",
            alignItems: "center",
            alignSelf: "stretch",
            borderRadius: "4px",
            background: "#E8E8E8"}}>
          {dropdownOptions.map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      ))}
      <NextButton onClick={() => { navigate(`/tcgeneral`) }} />
      </div>

  );
}

export default ParticipantDetails;
