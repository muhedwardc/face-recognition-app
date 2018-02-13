import React from 'react';

import './Navigation.css';

const Navigation = (props) => {
    if (!props.isSignin) { 
        return (
            <nav className='nav'>
                <a 
                    onClick={() => props.onRouteChange('signin')}
                    className='f3 link dim black underline pa3 pointer'>Sign In</a>
                <a 
                    onClick={() => props.onRouteChange('register')}
                    className='f3 link dim black underline pa3 pointer'>Register</a>
            </nav>
        )
    } else {
        return (
            <nav className='nav'>
                <a 
                    onClick={() => props.onRouteChange('signout')}
                    className='f3 link dim black underline pa3 pointer'>Sign Out</a>
            </nav>
        )
    }
}   

export default Navigation;