import React from 'react';
import { useNavigate } from "react-router-dom";

import { Button, SIZE } from "baseui/button";
import Image from './InProgress_ss.png'; // an image is defined here using file path

function InProgress() {
    let navigate = useNavigate();
    return (
        <div className='Home page'>
            <div style={{ position: 'relative', width: '375px', height: '812px', backgroundImage: `url(${Image})`, backgroundSize: 'cover' }}>
            </div>
            <Button onClick={() => { navigate(`/remaining30`) }} className='entire-screen' // CHANGE
            style={{
                width: '360px',
                height: '780px',
                position: 'absolute',
                top: '3%', /* Adjust the top value as needed */
                left: '3%', /* Adjust the left value as needed */
                backgroundColor: 'blue', // Set your desired background color
                opacity: '0%'
            }}>
                {/*make sure navigate param matches path defined in App.js*/}
            </Button>    
            
        </div>
    );
}

export default InProgress;