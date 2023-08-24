import React from 'react';
import { useNavigate } from "react-router-dom";

import { Button, SIZE } from "baseui/button";
import MockScreenshot from '../../Components/MockScreenshot/MockScreenshot.js';
import Image from './HomeScreen_ss.png'; // an image is defined here using file path

function HomeScreen() {
    let navigate = useNavigate();
    return (
        <div className='Home page'>
            <div style={{ position: 'relative', width: '375px', height: '812px', backgroundImage: `url(${Image})`, backgroundSize: 'cover' }}>
            </div>
            <Button onClick={() => { navigate(`/ftuxpreludescreen`) }} className='to-ftux-screen-button'
            style={{
                width: '100px',
                height: '40px',
                position: 'absolute',
                top: '29%', /* Adjust the top value as needed */
                left: '4%', /* Adjust the left value as needed */
                backgroundColor: 'transparent', // Set your desired background color
            }}>
                {/*make sure navigate param matches path defined in App.js*/}
            </Button>     
            <Button onClick={() => { navigate(`/ftuxpreludescreen`) }} className='to-ftux-screen-button'
            style={{
                width: '80px',
                height: '70px',
                position: 'absolute',
                top: '48%', /* Adjust the top value as needed */
                left: '28%', /* Adjust the left value as needed */
                backgroundColor: 'transparent', // Set your desired background color
            }}>
                {/*make sure navigate param matches path defined in App.js*/}
            </Button>   
        </div>
    );
}

export default HomeScreen;