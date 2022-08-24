import React from 'react';

import './MockScreenshot.css';

function MockScreenshot(props) {
    return (
        <div className='MockScreenshot'>
            <img className='MockScreenshotImg' src={props.imageUrl} alt="Please define an imageUrl property!" />
            {props.children}
        </div>
    );
}

export default MockScreenshot;