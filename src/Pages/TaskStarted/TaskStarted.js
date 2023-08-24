import React from 'react';
import { useNavigate } from "react-router-dom";

import { Button, SIZE } from "baseui/button";
import Image from './TaskStarted_ss.png'; // an image is defined here using file path

function TaskStarted() {
    let navigate = useNavigate();
    return (
        <div className='Home page'>
            <div style={{ position: 'relative', width: '375px', height: '812px', backgroundImage: `url(${Image})`, backgroundSize: 'cover' }}>
            </div>
            <Button onClick={() => { navigate(`/inprogress`) }} className='entire-screen' // CHANGE
            style={{
                width: '340px',
                height: '60px',
                position: 'absolute',
                top: '81%', /* Adjust the top value as needed */
                left: '6%', /* Adjust the left value as needed */
                backgroundColor: 'blue', // Set your desired background color
                opacity: '0%'
            }}>
                {/*make sure navigate param matches path defined in App.js*/}
            </Button>     
            
        </div>
    );
}

export default TaskStarted;