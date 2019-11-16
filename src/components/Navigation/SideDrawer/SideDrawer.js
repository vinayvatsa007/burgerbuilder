import React from 'react';
import './SideDrawer.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Auxilary';
const sideDrawer = (props) => {
    //...
    return (
    <Aux>
        <Backdrop show={props.open} clicked={props.closed} />
        <div className="SideDrawer">
            <Logo height="11%"/>
            <nav>
                <NavigationItems/>
            </nav>
        </div>
    </Aux>
    );
};

export default sideDrawer;
