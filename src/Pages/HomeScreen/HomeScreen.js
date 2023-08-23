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
            </MockScreenshot>
        </div>
    );
}

export default Home;