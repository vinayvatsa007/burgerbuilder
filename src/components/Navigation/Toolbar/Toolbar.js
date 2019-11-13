import React from 'react';
import './Toolbar.css';
// import NavigationItems from '../NavigationItems/NavigationItems';
// import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
// import Logo from '../../Logo/Logo';


const toolbar = (props) => (
    <header className="Toolbar">
        <div>Menu</div>
        <div>Logo</div>
        <nav>
            ...
        </nav>
        {/*<DrawerToggle clicked={props.drawerToggleClicked}/>*/}
        {/*<Logo height="80%" />*/}
        {/*<nav className={classes.DesktopOnly}>*/}
            {/*<NavigationItems />*/}
        {/*</nav>*/}
    </header>
);

export default toolbar;