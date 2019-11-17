import React from 'react';
import './Toolbar.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import Logo from '../../Logo/Logo';
import '../../Logo/Logo.css';


const toolbar = (props) => (
    <header className="Toolbar">
        {/*<div onClick={props.drawerToggleClicked}>Menu</div>*/}
        <DrawerToggle clicked={props.drawerToggleClicked}/>
        {/*<div onClick={props.drawerToggleClicked}>Menu</div>*/}
        {/*<Logo height="80%"/>*/}
        <div className="Logo">
            <Logo />
        </div>
        <nav className="DesktopOnly">
            <NavigationItems/>
        </nav>
    </header>
);

export default toolbar;