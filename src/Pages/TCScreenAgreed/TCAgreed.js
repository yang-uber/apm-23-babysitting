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
            <Button onClick={() => { navigate(`/ftuxpreludescreen`) }} className='back-button'
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
                <Button onClick={() => { navigate(`/tcgeneral`) }} className='to-tc-general-screen'
                style={{
                    width: '350px',
                    height: '60px',
                    position: 'absolute',
                    top: '24%', /* Adjust the top value as needed */
                    left: '4%', /* Adjust the left value as needed */
                    backgroundColor: 'transparent', // Set your desired background color
                }}>
                    {/*make sure navigate param matches path defined in App.js*/}
                </Button> 
                <Button onClick={() => { navigate(`/tcunagreed`) }} className='to-tc-unagreed-screen'
                style={{
                    width: '25px',
                    height: '25px',
                    position: 'absolute',
                    top: '82%', /* Adjust the top value as needed */
                    left: '4%', /* Adjust the left value as needed */
                    backgroundColor: 'blue', // Set your desired background color
                    opacity: '0%'
                }}>
                    {/*make sure navigate param matches path defined in App.js*/}
                </Button>
                <Button onClick={() => { navigate(`/datetime`) }} className='next-button'
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
            </MockScreenshot>
        </div>
    );
}

export default TCAgreed;