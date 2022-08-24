// Lib imports
import React, { useState } from 'react';
// Random imports from Base UI
import { Button } from "baseui/button";
import {
    ProgressSteps,
    Step
} from "baseui/progress-steps";
import { Combobox } from "baseui/combobox";
import { useNavigate } from "react-router-dom";

// Local imports
import MockScreenshot from '../../Components/MockScreenshot/MockScreenshot.js';
import Image from './newfeature_screenshot.png'; // another image is defined here using file path
import './NewFeature.css';

// this is some random bullshit combination of Base UI components and logic to demonstrate what a UI might look like in React
// since they don't care about backend you can probably just store persisting data in React state

function NewFeature() {
    const [stepState, setStepState] = useState(0);
    const [userAnswer, setUserAnswer] = useState('');
    let navigate = useNavigate();
    return (
        <div className='NewFeature page'>
            <MockScreenshot imageUrl={Image}> {/*each instance of MockScreenshot needs an image url passed like this */}
                <div className='formatting-container'>
                    <ProgressSteps current={stepState}>
                        <Step title="How many APMs does it take to change a lightbulb?">
                            <Combobox
                                value={userAnswer}
                                onChange={answer => setUserAnswer(answer)}
                                options={[
                                    { label: "Yes", id: "#F0F8FF" },
                                    { label: "No", id: "#FAEBD7" },
                                    { label: "Stop hackathon pls", id: "#00FFFF" },
                                ]}
                                mapOptionToString={option => option.label}
                            />
                            <Button
                                size="compact"
                                onClick={() => setStepState(1)}
                            >
                                Next
                            </Button>
                        </Step>
                        <Step title="Verify Answer">
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                {(userAnswer === "Stop hackathon pls") ? "Correct!" : "Wrong!"}
                                <Button
                                    size="compact"
                                    onClick={() => setStepState(0)}
                                >
                                    Go Back
                                </Button>
                            </div>
                        </Step>
                    </ProgressSteps>
                    <Button
                        size="medium"
                        onClick={() => navigate(`/`)}
                    >
                        Take Me Home
                    </Button>
                </div>
            </MockScreenshot>
        </div>
    );
}

export default NewFeature;