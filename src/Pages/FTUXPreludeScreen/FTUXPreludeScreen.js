import React from 'react';
import { useNavigate } from "react-router-dom";

import { Button, SIZE } from "baseui/button";
import MockScreenshot from '../../Components/MockScreenshot/MockScreenshot.js';
import Image from './FTUXPreludeScreen_ss.png'; // an image is defined here using file path

function FTUXPreludeScreen() {
    let navigate = useNavigate();
    return (
        <div className='Home page'>
            <MockScreenshot imageUrl={Image}> {/*each instance of MockScreenshot needs an image url passed like this */}
                <Button onClick={() => { navigate(`/tcunagreed`) }} className='to-tcunagreed-button'
                style={{
                    width: '340px',
                    height: '55px',
                    position: 'absolute',
                    top: '89%', /* Adjust the top value as needed */
                    left: '5%', /* Adjust the left value as needed */
                    backgroundColor: 'transparent', // Set your desired background color
                }}>
                    {/*make sure navigate param matches path defined in App.js*/}
                </Button>     

                <Button className='back-button'
                style={{
                    width: '50px',
                    height: '50px',
                    position: 'absolute',
                    top: '5%', /* Adjust the top value as needed */
                    left: '2%', /* Adjust the left value as needed */
                    backgroundColor: 'blue', // Set your desired background color
                    opacity: '50%'
                }}>
                    {/*make sure navigate param matches path defined in App.js*/}
                </Button>   
            </MockScreenshot>
        </div>
    );
}

export default FTUXPreludeScreen;