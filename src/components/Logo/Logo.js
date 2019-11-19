import React from 'react';
import './Logo.css';

import burgerLogo from '../../assets/images/127 burger-logo.png';

const logo = (props) => (
    <div className="Logo" style={{height: props.height, width: props.width, backgroundColor: props.backgroundColor }}>
        <img src={burgerLogo} alt="logo-burger" />
    </div>
);

export default logo;