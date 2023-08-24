import React from 'react';
import { useNavigate } from "react-router-dom";

import { Button, SIZE } from "baseui/button";
import Image from './Review_ss.png'; // an image is defined here using file path

function Review({address, startTime, endTime, homeDesc, kidsDesc, address2}) {
    let navigate = useNavigate();
    return (
        <div>
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
                    left: "60px",
                    border: "none",
                    background: "#FFFFFF",
                    width: "365px",
                }}>
                    <div style={{ 
                        fontWeight: 'bold', 
                        color: 'black'  // Or another color for prominence 
                    }}>
                        {`${startTime} until ${endTime}` }
                    </div>

                    {/* This is the subtitle */}
                    <div style={{ 
                        fontWeight: 'normal', 
                        color: 'gray',  // Or another color for less emphasis 
                    }}>
                        $2.00/minute for overtime
                    </div> 
                </div>
            </div>
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
                    left: "60px",
                    border: "none",
                    background: "#FFFFFF",
                    width: "365px",
                }}>
                    <div style={{ 
                        fontWeight: 'bold', 
                        color: 'black'  // Or another color for prominence 
                    }}>
                        {`${address}` }
                    </div>

                    {/* This is the subtitle */}
                    <div style={{ 
                        fontWeight: 'normal', 
                        color: 'gray',  // Or another color for less emphasis 
                    }}>
                        {`${address2} `}
                    </div> 
                    {/* This is the subtitle */}
                    <div style={{ 
                        fontWeight: 'normal', 
                        color: 'gray',  // Or another color for less emphasis 
                    }}>
                        San Francisco, California
                    </div> 
                </div>
            </div>
            <div className="Home Desc" style={{
                position: 'absolute',  // Changed to relative so it stacks normally in the flex container
                top: '420px',
                height: '70px',
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
                width: "365px",
                overflow:'hidden',
                }}
            >
                <div style= {{
                    paddingTop: "5px",
                    position: "relative",
                    left: "60px",
                    border: "none",
                    background: "#FFFFFF",
                }}>
                    <div style={{ 
                        fontWeight: 'bold', 
                        color: 'black'  // Or another color for prominence 
                    }}>
                        Home Description
                    </div>

                    {/* This is the subtitle */}
                    <div style={{ 
                        fontWeight: 'normal', 
                        color: 'gray',  // Or another color for less emphasis 
                        width: '250px'
                    }}>
                        {`${homeDesc}`}
                    </div> 
                </div>
            </div>
            <div className="Kids Desc" style={{
                position: 'absolute',  // Changed to relative so it stacks normally in the flex container
                top: '495px',
                height: '70px',
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
                width: "365px",
                overflow:'hidden',
                }}
            >
                <div style= {{
                    paddingTop: "5px",
                    position: "relative",
                    left: "60px",
                    border: "none",
                    background: "#FFFFFF",
                }}>
                    <div style={{ 
                        fontWeight: 'bold', 
                        color: 'black'  // Or another color for prominence 
                    }}>
                        Children Description
                    </div>

                    {/* This is the subtitle */}
                    <div style={{ 
                        fontWeight: 'normal', 
                        color: 'gray',  // Or another color for less emphasis 
                        width: '250px'
                    }}>
                        {`${kidsDesc}`}
                    </div> 
                </div>
            </div>
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