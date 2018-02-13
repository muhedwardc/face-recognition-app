import React from 'react';

import './Navigation.css';

const Navigation = (props) => {
    return (
        <nav className='nav'>
            <a 
                onClick={() => props.onRouteChange('signin')}
                className='f3 link dim black underline pa3 pointer'>Sign Out</a>
        </nav>
    )
}   

export default Navigation;