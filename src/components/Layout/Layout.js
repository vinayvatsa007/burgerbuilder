import React from 'react';
import Aux from '../../hoc/Auxilary';
import './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

const  Layout = (props)=> (
    <Aux>
        <Toolbar />
        <SideDrawer />
        {/*<div > Toolbar, Sidebar, Backdrop</div>*/}
        <main className = "Content">
            {props.children}
        </main>
    </Aux>
);

export default Layout;