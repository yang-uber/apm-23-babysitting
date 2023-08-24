import React from 'react';
import { useNavigate } from "react-router-dom";

import { Button, SIZE } from "baseui/button";
import Image from './Confirmation_ss.png'; // an image is defined here using file path

function Confirmation({address, startTime, endTime, homeDesc, kidsDesc, address2}) {
    let navigate = useNavigate();
    return (
        <div className='Home page'>
            <div style={{ position: 'relative', width: '375px', height: '812px', backgroundImage: `url(${Image})`, backgroundSize: 'cover' }}>
            </div>

            <div className="Date Info" style={{
                position: 'absolute',  // Changed to relative so it stacks normally in the flex container
                top: '250px',
                height: '65px',
                borderRadius: '8px',
                padding: '0px 0px 0px 0px',  // Increase left padding to accommodate the SVG
                lineHeight: '30px',
                fontFamily: 'Uber Move, sans-serif',
                fontSize: '16px',
                backgroundColor: 'transparent',
                border: "none",
                whiteSpace: 'pre-wrap',
                wordWrap: 'break-word',
                resize: 'none',
                '::-webkit-scrollbar': {
                    display: 'none',
                    width: '0px'  // For Windows high-contrast mode
                },
                overflow:'hidden',
                }}
            >
                <div style= {{
                    position: "relative",
                    left: "0px",
                    border: "none",
                    background: "black",
                    width: "310px",
                }}>
                    <div style={{ 
                        fontWeight: 'bold', 
                        color: 'white',  // Or another color for prominence 
                        paddingLeft: "30px",
                        fontSize: "20px"
                    }}>
                        {`Saturday, August 26th \n ${startTime} until ${endTime}` }
                    </div> </div></div>

                <div className="Location Info" style={{
                position: 'absolute',  // Changed to relative so it stacks normally in the flex container
                top: '320px',
                height: '95px',
                borderRadius: '8px',
                padding: '0px 0px 0px 0px',  // Increase left padding to accommodate the SVG
                lineHeight: '30px',
                fontFamily: 'Uber Move, sans-serif',
                fontSize: '16px',
                backgroundColor: 'transparent',
                border: "none",
                whiteSpace: 'pre-wrap',
                wordWrap: 'break-word',
                resize: 'none',
                '::-webkit-scrollbar': {
                    display: 'none',
                    width: '0px'  // For Windows high-contrast mode
                },
                overflow:'hidden',
                }}
            >
                <div style= {{
                    position: "relative",
                    left: "40px",
                    border: "none",
                    background: "black",
                    width: "325px",
                }}>
                    <div style={{ 
                        fontWeight: 'bold', 
                        color: 'white'  // Or another color for prominence 
                    }}>
                        {`Home` }
                    </div>
                    {/* This is the subtitle */}
                    <div style={{ 
                        fontWeight: 'normal', 
                        color: 'gray',  // Or another color for less emphasis 
                    }}>
                        {`${address}, San Francisco, California` }
                    </div> 
                </div>
            </div>


            <Button onClick={() => { navigate(`/activity`) }} className='next-button'
            style={{
                width: '340px',
                height: '55px',
                position: 'absolute',
                top: '89%', /* Adjust the top value as needed */
                left: '5%', /* Adjust the left value as needed */
                backgroundColor: 'blue', // Set your desired background color
                opacity: '0%'
            }}>
                {/*make sure navigate param matches path defined in App.js*/}
            </Button>     
        </div>
    );
}

export default Confirmation;