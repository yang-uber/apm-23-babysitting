import React from 'react';
import { useNavigate } from "react-router-dom";

import { Button, SIZE } from "baseui/button";
import MockScreenshot from '../../Components/MockScreenshot/MockScreenshot.js';
import Image from './TCAgreed_ss.png'; // an image is defined here using file path

function TCAgreed() {
    let navigate = useNavigate();
    return (
        <div className='Home page'>
            <MockScreenshot imageUrl={Image}> {/*each instance of MockScreenshot needs an image url passed like this */}
            </MockScreenshot>
        </div>
    );
}

export default TCAgreed;