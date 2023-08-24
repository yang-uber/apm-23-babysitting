import React from 'react';
import { useNavigate } from "react-router-dom";

import { Button, SIZE } from "baseui/button";
import MockScreenshot from '../../Components/MockScreenshot/MockScreenshot.js';
import Image from './TCGeneral.png'; // an image is defined here using file path
import NextButton from '../../Components/MockScreenshot/NextButton/NextButton.js';

function TCUnagreed() {
    const navigate = useNavigate();
    return (
        <div className='Home page'>
        <div style={{ position: 'relative', width: '375px', height: '812px', backgroundImage: `url(${Image})`, backgroundSize: 'cover' }}>
        </div>
        <Button onClick={() => { navigate(`/tcunagreed`) }} className='back-button'
            style={{
                width: '50px',
                height: '50px',
                position: 'absolute',
                top: '5%', /* Adjust the top value as needed */
                left: '2%', /* Adjust the left value as needed */
                backgroundColor: 'blue', // Set your desired background color
                opacity: '0%'
            }}>
                {/*make sure navigate param matches path defined in App.js*/}
            </Button>   
        </div>
    );
}

export default TCUnagreed;