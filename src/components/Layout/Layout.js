import React from 'react';
import Aux from '../../hoc/Auxilary';
import classes from './Layout.css';

const  Layout = (props)=> (
    <Aux>
        <div> Toolbar, Sidebar, Backdrop</div>
        <main className = {props.children}>
            {props.children}
        </main>
    </Aux>
);

export default Layout;