import React from 'react';
import { useNavigate } from "react-router-dom";

import { Button, SIZE } from "baseui/button";
import MockScreenshot from '../../Components/MockScreenshot/MockScreenshot.js';
import Image from './TCUnagreed_ss.png'; // an image is defined here using file path
import NextButton from '../../Components/MockScreenshot/NextButton/NextButton';

function TCUnagreed() {
    const navigate = useNavigate();
    const handleNextClick = () => {
        navigate("/tcuagreed");
    }
    return (
        <div className='Home page'>
            <MockScreenshot imageUrl={Image}> {/*each instance of MockScreenshot needs an image url passed like this */}
            </MockScreenshot>
            <NextButton onClick={handleNextClick} />
        </div>
    );
}

export default TCUnagreed;