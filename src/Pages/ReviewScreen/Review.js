import React from 'react';
import { useNavigate } from "react-router-dom";

import { Button, SIZE } from "baseui/button";
import Image from './Review_ss.png'; // an image is defined here using file path

function Review() {
    let navigate = useNavigate();
    return (
        <div className='Home page'>
            <div style={{ position: 'relative', width: '375px', height: '812px', backgroundImage: `url(${Image})`, backgroundSize: 'cover' }}>
            </div>
            <Button onClick={() => { navigate(`/ftuxpreludescreen`) }} className='back-button' // CHANGE
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
            <Button onClick={() => { navigate(`/confirmation`) }} className='next-button' // CHANGE
            style={{
                width: '340px',
                height: '55px',
                position: 'absolute',
                top: '92%', /* Adjust the top value as needed */
                left: '5%', /* Adjust the left value as needed */
                backgroundColor: 'blue', // Set your desired background color
                opacity: '0%'
            }}>
                {/*make sure navigate param matches path defined in App.js*/}
            </Button>     
        </div>
    );
}

export default Review;