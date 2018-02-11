import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = (props) => {
    return (
        <div className='facerecognition'>
            <img id='inputimage' alt='' src={props.imageUrl}/>
            <div className='bounding-box' style={{
                top: props.box.topRow,
                right: props.box.rightCol,
                bottom: props.box.bottomRow,
                left: props.box.leftCol
            }}></div>
        </div>  
    )
}

export default FaceRecognition;