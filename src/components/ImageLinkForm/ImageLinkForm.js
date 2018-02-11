import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = (props) => {
    return (
        <div>
            <p className='f3'>
                {'This App will detect faces in your pictures. Gift it a try.'}
            </p>
            <div className='form pa4 br3 shadow-5'>
                <input className='f4 pa2 w-70 center' type='text' onChange={props.onInputChange}/>
                <button 
                    className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple pointer'
                    onClick={props.onSubmit} >
                    Detect</button>
            </div>
        </div>
    )
}

export default ImageLinkForm;