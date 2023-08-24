import React from 'react';
import { useNavigate } from "react-router-dom";
import './HomeScreen.css';

import { Button, SIZE } from "baseui/button";
import MockScreenshot from '../../Components/MockScreenshot/MockScreenshot.js';
import Image from './HomeScreen_ss.png'; // an image is defined here using file path

function Home() {
    let navigate = useNavigate();
    return (
        <div className='Home page'>
            <MockScreenshot imageUrl={Image}> {/*each instance of MockScreenshot needs an image url passed like this */}
                <Button onClick={() => { navigate(`/newfeature`) }} className='to-ftux-screen-button'
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
            </MockScreenshot>
        </div>
    );
}

export default Home;