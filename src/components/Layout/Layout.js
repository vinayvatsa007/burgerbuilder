import React from 'react';
import Aux from '../../hoc/Auxilary';

const  Layout = (props)=> (
    <Aux>
        <div> Toolbar, Sidebar, Backdrop</div>
        <main>
            {props.children}
        </main>
    </Aux>
);

export default Layout;